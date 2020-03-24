const ndfunc=require('./ndfunc.js')
const cmmn=require('./cmmn.js')

function creat_root(nodes){
    let root = new _Node(nodes)
    root._fstch = null
    root._lsib = null
    root._rsib = null
    root._parent = null
    root._tree = root._id
    return(root)   
}



class Tree {
    constructor() {
        this._nodes = {}
        this._root = creat_root(this._nodes) 
        this._nodes[this._root._id] = this._root
    }
}


class _Node {
    constructor(nodes){
        let _id = ndfunc.calc_next_id(nodes)
        this._id = _id
        this._fstch = null
        this._lsib = undefined
        this._rsib = undefined
        this._parent = undefined
        this._tree = undefined
        this._nodes = nodes     
    }
    is_inited(){
        return(ndfunc.is_inited(this))
    }
    is_root(){
        return(ndfunc.is_root(this))
    }
    is_fstch(){
        return(ndfunc.is_fstch(this))
    }
    is_lstch(){
        return(ndfunc.is_lstch(this))
    }
    is_leaf(){
        return(ndfunc.is_leaf(this))
    }
}



