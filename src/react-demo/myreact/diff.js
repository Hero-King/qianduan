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
        diffDomAttribute(dom, vnode.props);

    }
    let { children } = vnode.props;
    if( (dom.children && dom.children.length > 0) || (children && children.length > 0) ){
        diffChildren(dom, children);
    }
    // if (children) {
    //     Array.isArray(children) ? children.forEach((item, index) => diff(item, dom, dom.children && dom.children[index]))
    //         : diff(children, dom, dom.firstChild)
    // }
    return dom
}

//TODOS 不会写！！！
function diffChildren(dom, vChildren) {
    if( Array.isArray(vChildren)){
        vChildren.forEach((vnode, index) => {
            const curDom = dom.children[index];
            const oneChild = renderByDiff(curDom, vnode)
            if( curDom){
                console.log("已经存在",oneChild, curDom)
                
            }else {
                dom.appendChild(oneChild)
            }
        })
    }else{
        let child = renderByDiff( dom.children[0], vChildren);
        dom.innerHTML = "";
        dom.appendChild(child)
        
    }
}

function diffDomAttribute(dom, props) {
    let oldDomAttributes = {}
    Object.values(dom.attributes).forEach(i => oldDomAttributes[i.name] = i.value)
    
    for (let key in props) {
        let value = props[key]
        if (key === "className") key = "class";
        if (key == "children") continue;
        if (value) {
            if (dom.getAttribute(key) !== value) {
                dom.setAttribute(key, value)

            }
        }
        delete oldDomAttributes[key]
    }
    Object.keys(oldDomAttributes).forEach(name => {
        dom.setAttribute(name,null)
    })
}