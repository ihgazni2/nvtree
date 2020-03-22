const ndfunc = require('./ndfunc.js')


class Tree() {
    constructor() {
        this._nodes = {}
        this._root = ndfunc.creat_root()
        this._nodes[this._root._id] = this._root
    }
    
}

