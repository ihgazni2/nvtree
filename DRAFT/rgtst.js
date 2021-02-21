const {mdict} = require("nv-dict-desc");

const KEY_ARR = ['id','fstch','lsib','rsib','parent']

function new_relation() {return([0,0,0,0,0])}

function set_id(relation,tree) {
    let id = tree.ready_id
    relation[0] = id
    tree.ready_id = tree.ready_id + 1
    return(id)
}
function get_id(relation) {return(relation[0])}

function set_fstch(relation,fstch) {relation[1] = fstch}
function get_fstch(relation) {return(relation[1])}

function set_lsib(relation,lsib) {relation[2] = lsib}
function get_lsib(relation) {return(relation[2])}

function set_rsib(relation,rsib) {relation[3] = rsib}
function get_rsib(relation) {return(relation[3])}

function set_parent(relation,parent) {relation[4] = parent}
function get_parent(relation) {return(relation[4])}



module.exports = {
    KEY_ARR,
    KIMD:dict_desc.mdict(KEY_ARR),
    new_relation,
    set_id,
    get_id,
    set_fstch,
    get_fstch,
    set_lsib,
    get_lsib,
    set_rsib,
    get_rsib,
    set_parent,
    get_parent
}

