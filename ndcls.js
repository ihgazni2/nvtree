const ndfunc = require('./ndfunc.js')

class Node {
    constructor() {
        this._fstch = null
        this._lsib = undefined
        this._rsib = undefined
        this._parent = undefined
        this._tree = undefined
    }
    is_inited() {
        return(ndfunc.is_inited(this))
    }
    is_root() {
        let cond = (this._tree === this)
        return(cond)
    }
    is_fstch() {
        return(ndfunc.is_fstch(this))
    }
    is_lstch() {
        return(ndfunc.is_lstch(this))
    }   
    is_leaf() {
        return(ndfunc.is_leaf(this))
    } 
    prepend_child(child) {
        
    } 
}


class Root extends Node {
    constructor() {
        super();
        this._fstch = null
        this._lsib = null
        this._rsib = null
        this._parent = null
        this._tree = this
    }
}


