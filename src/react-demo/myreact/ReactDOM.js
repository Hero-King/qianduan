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
 * @param {Object} vnode 
 * @returns dom真实元素节点
 */
function _render(vnode) {

    let dom
    // 参数校验
    if (vnode === undefined || vnode === null) return;
    // 创建dom元素
    if (typeof vnode === "string") {
        return dom = document.createTextNode(vnode)
    } else if (typeof vnode === "number") {
        return dom = document.createTextNode(String(vnode))
    }

    // 如果是组建
    if( typeof vnode === "function" ){
        
    }

    const {
        type,
        attrs,
        childrens
    } = vnode;
    dom = document.createElement(type);

    // 添加节点属性
    if (attrs) {
        for (const key in attrs) {
            const value = attrs[key];
            setAttribute(dom, key, value)
        }
    }

    // 渲染子节点
    if (childrens) {
        childrens.forEach(i => render(i, dom))
    }
    return dom
}

function setAttribute(dom, key, value) {
    if (key === "className") key = "class";
    if (/on\w+/.test(key)) key = key.toLowerCase();
    else if (key === "style") {
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

export default {
    render
}