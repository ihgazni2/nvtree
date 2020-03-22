const ndfunc = require('./ndfunc.js')

class Node {
    constructor(id=0) {
        this._id = id;
        this._fstch = null,
        this._lsib = undefined,
        this._rsib = undefined,
        this._parent = undefined,
        this._tree = undefined    
    }
    
}


class Root extends Node {
    constructor(id=0) {
        super(id);
        this._id = id;
        this._fstch = null,
        this._lsib = null,
        this._rsib = null,
        this._parent = null,
        this._tree = id 
    }
}










