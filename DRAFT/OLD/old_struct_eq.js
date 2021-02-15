function _ele_struct_eq(ele0,ele1,cu_sign_func,...args) {
    let cond = true
    if(cu_sign_func){
        let sign0 = cu_sign_func(ele0._nd,...args)
        let sign1 = cu_sign_func(ele1._nd,...args)
        cond = (sign0 === sign1)
    }
    return(
        ele0._pbreadth === ele1._pbreadth &&
        ele0._breadth === ele1._breadth &&
        ele0._depth === ele1._depth &&
        cond
    )
}

function struct_eq(tree0,tree1,cu_sign_func,...args) {
    let m0 = tree0.$sdfs2mat()
    let m1 = tree1.$sdfs2mat()
    let flat0 = Array.prototype.concat(...m0)
    let flat1 = Array.prototype.concat(...m1)
    if(flat0.length !== flat1.length) {
        return(false)
    } else {
        for(let i=0;i<flat0.length;i++) {
            if(_ele_struct_eq(flat0[i],flat1[i],cu_sign_func,...args)) { } else {return(false)}
        }
    }
    return(true)
}

