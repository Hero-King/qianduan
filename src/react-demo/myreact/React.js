/**
 * 将jsx语法解析成虚拟dom 对象
 * @param {*} tag 
 * @param {*} config 
 * @param  {...any} childrens 
 */
function createElement(tag, attrs, ...childrens) {
    return {
        type: tag,
        attrs,
        childrens
    }
}

export default {
    createElement
}