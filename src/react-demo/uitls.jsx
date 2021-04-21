import { sum, add } from './otherutils'
export function test(params) {
    console.log(params || "noparams");
}

export {
    add,
    sum
}

export default function () {
    console.log("default");
}
