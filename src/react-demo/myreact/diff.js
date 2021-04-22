export function diff(vnode, container, dom) {

    let ret = renderByDiff(dom, vnode)

    if (container) {
        container.appendChild(ret)
    }

    return ret
}

function renderByDiff(dom, vnode) {
    // 参数校验
    if (vnode === undefined || vnode === null) return;
    if (typeof vnode === "number") vnode = String(vnode)
    // 创建dom元素
    if (typeof vnode === "string") {
        if (dom) {
            // 如果是文本节点
            if (dom.nodeType === 3) {
                if (dom.textContent !== vnode) {
                    dom.textContent = vnode;
                }
                // 不是文本节点,直接更新成新的
            } else if (dom.parentNode) {
                dom.parentNode.replaceChild(document.createTextNode(vnode), dom)
            }

        } else {
            dom = document.createTextNode(vnode);
        }
        return dom
    } else {
        if (!dom) {
            dom = document.createElement(vnode.type)
        }
        setDomAttribute(dom, vnode.props);

    }
    let { children } = vnode.props;
    if (children) {
        Array.isArray(children) ? children.forEach((item, index) => diff(item, dom, dom.children && dom.children[index]))
            : diff(children, dom, dom.firstChild)
    }
    return dom
}

function setDomAttribute(dom, props) {
    for (let key in props) {
        let value = props[key]
        if (key === "className") key = "class";
        if (key == "children") continue;
        if (value) {
            if (dom.getAttribute(key) !== value) dom.setAttribute(key, value)
        }
    }
}