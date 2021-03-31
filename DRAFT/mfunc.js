const creat_uint_mat = require("nv-uintyped-mat")

function creat_tree(capacity) {
    let tree = creat_uint_mat(capacity,capacity,4);
    tree.fill(capacity);
    tree.EMPTY = capacity;
    return(tree)
}

function get_fst_empty_slot_id(tree,from=0) {
    for(let i=from;i<tree.rownum;i++) {
        let slot = tree.get_row(i)
        if(slot[0] === tree.EMPTY) {
            return(i)
        }
    }
    return(-1)
}

function get_node(tree,id) {return(tree.get_row(id))}

function _get_engine(tree,id,key) {
    let nd = get_node(tree,id);
    return(get_node(tree,nd[key]))
}

function get_fstch(tree,id) {return(_get_engine(tree,id,0))}
function get_lsib(tree,id) {return(_get_engine(tree,id,1))}
function get_rsib(tree,id) {return(_get_engine(tree,id,2))}
function get_parent(tree,id) {return(_get_engine(tree,id,3))}

function _singlex_set_engine(tree,id,key,nid) {
    let nd = get_node(tree,id);
    nd[key] = nid;
    return(get_node(tree,nid))
}

function singlex_set_fstch(tree,id,nid) {return(_singlex_set_engine(tree,id,0,nid))}
function singlex_set_lsib(tree,id,nid) {return(_singlex_set_engine(tree,id,1,nid))}
function singlex_set_rsib(tree,id,nid) {return(_singlex_set_engine(tree,id,2,nid))}
function singlex_set_parent(tree,id,nid) {return(_singlex_set_engine(tree,id,3,nid))}

function duplex_set_fstch(tree,id,nid) {
    let fstch = singlex_set_fstch(tree,id,nid);

}



module.exports = {
    creat_tree,
    get_fst_empty_slot_id,
    get_node,
    get_fstch,
    get_lsib,
    get_rsib,
    get_parent,
    singlex_set_fstch,
    singlex_set_lsib,
    singlex_set_rsib,
    singlex_set_parent,
    duplex_set_fstch,
    duplex_set_lsib,
    duplex_set_rsib,
}

