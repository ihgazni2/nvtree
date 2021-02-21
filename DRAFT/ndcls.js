const Tree = require("./tree");
const rgtst = require("./rgtst")

class Node extends ET {
    #tree = new Tree()
    #relation = rgtst.new_relation()
    constructor(tree,pkey,data) {
        let tree = (tree instanceof Tree)?tree:this.#tree;
        let id = rgtst.set_id(this.#relation,tree);
        tree.add(id,pkey,data);
        this.#tree = tree;
    }
}

