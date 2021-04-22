class MyComponent {
    constructor(props = {}) {
        this.props = props
        this.state = {}
    }

    setState(obj) {
        this.state.title = "newtitle"
        renderComponent(this)
    }

}
/**
 * 
 * @param {Object} vnode 
 * @param {document} container 
 */
function render(vnode, container) {
    container.appendChild(_render(vnode))
}
/**
 * 
 * @param {Object} comp  comp实例
 */
function renderComponent(comp) {

    if (!comp.base && comp.componentWillMount) {
        comp.componentWillMount()
    } else if (comp.base && comp.componentWillUpdate) {
        comp.componentWillUpdate()
    }

    // 渲染组件
    let renderer = comp.render()  //组件render返回的jsx
    let base = _render(renderer)

    if (!comp.base) {
        // 组建挂载完成
        if (comp.componentDidMount) {
            comp.componentDidMount()
        }
    }

    if (comp.base && comp.base.parentNode) {
        console.log("replace node")
        comp.base.parentNode.replaceChild(base, comp.base);

        if (comp.componentDidUpdate) {
            comp.componentDidUpdate()
        }
    }
    comp.base = base
}

/**
 * 
 * @param {Object} vnode     
 * @returns dom真实元素节点
 */
export function _render(vnode) {

    let dom
    // 参数校验
    if (vnode === undefined || vnode === null) return;
    // 创建dom元素
    if (typeof vnode === "string") {
        return dom = document.createTextNode(vnode)
    } else if (typeof vnode === "number") {
        return dom = document.createTextNode(String(vnode))
    }

    // 如果是组件
    if (typeof vnode.type === "function") {
        // 创建组件实例
        let comp = createComponent(vnode.type, vnode.props)
        console.log(comp);

        renderComponent(comp)

        return comp.base
    }

    const {
        type,
        props,
    } = vnode;
    dom = document.createElement(type);
    const childrens = props && props.children

    // 添加节点属性
    if (props) {
        for (const key in props) {
            const value = props[key];
            key !== "children" && setAttribute(dom, key, value)
        }
    }

    // 渲染子节点
    if (childrens) {
        Array.isArray(childrens) ? childrens.forEach(i => render(i, dom)) : render(childrens, dom)
    }
    return dom
}

function createComponent(comp, props) {
    let inst
    // 如果是类组件
    if (comp.prototype && comp.prototype.render) {
        inst = new comp(props)
    } else {
        // 函数组件转换成类组件
        inst = new MyComponent(props)
        inst.constructor = comp;
        inst.render = function (params) {
            return this.constructor(props)
        }
    }
    return inst
}

function setAttribute(dom, key, value) {
    if (key === "className") key = "class";
    if (/on\w+/.test(key)) {
        key = key.toLowerCase();
    }
    if (key === "style") {
        if (!value && typeof value == "string") {
            dom.style.cssText = value || "";
        } else if (value && typeof value == "object") {
            for (const key in value) {
                if (typeof value[key] == "number") {
                    dom.style[key] = value[key] + "px"
                } else {
                    dom.style[key] = value[key]
                }
            }
        }
    } else {
        if (key in dom) {
            dom[key] = value
        }
        if (value) {
            dom.setAttribute(key, value)
        }
    }
}

export {
    render,
    MyComponent
}