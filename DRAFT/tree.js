const {v4} = require("uuid")

class Tree {
    constructor() {
        this.id = v4();
        this.pkey_mp = new Map();
        this.data_mp = new Map();
        this.ready_id = 1
    }
    add(id,pkey,data) {
        this.pkey_mp.set(id,pkey);
        this.data_mp.set(id,data);
    }
    del(id) {
        this.pkey_mp.delete(id);
        this.data_mp.delete(id);
    }
}

module.exports = Tree

