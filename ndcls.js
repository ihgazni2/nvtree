const cmmn = require('./cmmn.js')


function _is_inited(nd) {
    //被添加到了树上
    let cond = (nd._tree !== undefined)
    return(cond)
}

function _is_root(nd) {
    //根节点的_tree 指向自己
    let cond = (nd._tree === nd)
    return(cond)
}

function _is_fstch(nd) {
    //没有左兄弟
    let cond = (nd._lsib === null)
    return(cond)
}

function _is_lstch(nd) {
    //没有右兄弟
    let cond = (nd._rsib === null)
    return(cond)
}


function _is_leaf(nd) {
    //没有子
    let cond = (nd._fstch === null)
    return(cond)
}


function _is_lonely(nd) {
    let sibs = nd.$sibs(including_self=true)
    return(sibs.length === 1)
}


/* child query*/

//_fstch is always directly

function _lstch(nd) {
    let child = nd._fstch
    let oldch = child
    while(child!==null) {
        oldch = child
        child = child._rsib
    }
    return(oldch)
}

function _which_child(index,nd) {
    let c = 0
    let child = nd._fstch
    while(true) {
        if(c === index) {
            return(child)
        } else {
            if(child === null) {
                return(child)
            } else {
            }
        }
        child = child._rsib
        c = c + 1
    }
}

function _some_children(nd,...whiches) {
    let children = []
    let c = 0
    let child = nd._fstch
    while(true) {
        if(whiches.includes(c)) {
            children.push(child)
        } else {
            if(child === null) {
                return(children)
            } else {
            }
        }
        child = child._rsib 
        c = c + 1
    }
}

function _children(nd) {
    let children = []
    let c = 0
    let child = nd._fstch
    while(true) {
        if(child === null) {
            return(children)
        } else {
            children.push(child)
        }
        child = child._rsib
        c = c + 1
    }
}


function _children_count(nd) {
    let c = 0
    let child = nd._fstch
    while(true) {
        if(child === null) {
            return(c)
        } else {
        }
        child = child._rsib
        c = c + 1
    }
}


/*sib*/

//_rsib is always directly 

function _lstsib(nd,including_self=false) {
    let rsib = nd._rsib
    let oldrsib = nd
    while(rsib !== null) {
        oldrsib = rsib
        rsib = rsib._rsib 
    }  
    if(including_self){
        return(oldrsib)
    } else {
        if(oldrsib !== nd) {
            return(oldrsib)
        } else {
            return(null)
        }
    }    
}



function _fstsib(nd,including_self=false) {
    let p = _parent(nd)
    if(p === null) {
        return((including_self)?nd:null)
    } else {
        let fstsib = p._fstch
        if(including_self) {
            return(fstsib)        
        } else {
            if(fstsib !== nd) {
                return(fstsib)
            } else {
                return(null)
            }
        }
    }
}


function _lsib(nd) {
    let fstsib = _fstsib(nd,including_self=false)
    if(fstsib === null) {
        return(null)
    } else {
        let sib = fstsib
        while(true) {
            if(sib._rsib === nd) {
                return(sib)
            } else {
            }
            sib = sib._rsib
        }
    }
}


function _psibs(nd) {
    let psibs = []
    let fstsib = _fstsib(nd,including_self=true)
    let sib = fstsib
    while(sib !== null) {
        if(sib === nd) {
            return(psibs)           
        } else {
            psibs.push(sib)
        }
        sib = sib._rsib
    }
}


function _fsibs(nd) {
    let fsibs = []
    let rsib = nd._rsib
    while(rsib !== null) {
        fsibs.push(rsib)
        rsib = rsib._rsib
    }
    return(fsibs)
}

function _sibs(nd,including_self=false) {
    let psibs = _psibs(nd)
    let fsibs = _fsibs(nd)
    let me = [nd]
    if(including_self) {
        sibs = psibs.concat(me,fsibs)
    } else {
        sibs = psibs.concat(fsibs)
    }
    return(sibs)
}


function _which_sib(index,nd) {
    let sib = _fstsib(nd,including_self=true)
    let c = 0
    while(true) {
        if(sib === null) {
            return(null)
        } else {
            if(c==index) {
                return(sib)
            }
        }
        sib = sib._rsib
        c = c + 1
    }    
}

function _some_sibs(nd,...indexes) {
    let sibs = _sibs(nd,including_self=true) 
    let some = sibs.filter(
        (r,i) => indexes.includes(i) 
    )
    return(some)   
}


function _sibseq(nd) {
    let psibs = _psibs(nd)
    return(psibs.length)
}


function _sibs_count(nd,including_self=false) {
    let sibs = nd.$sibs(including_self)
    return(sibs.length)
}




/*ance*/

function _parent(nd) {
    let lstsib = _lstsib(nd,including_self=true)
    return(lstsib._parent)
}

function _root(nd) {
    let ance = nd
    let old = nd
    while(ance !== null) {
        old = ance
        ance = ance.$parent()
    }
    return(ance)    
}

function _which_ance(index,nd) {
    let c = 0
    let ance = nd
    while(ance !== null) {
        if(c === index) {
            return(ance)
        } else {
        }
        ance = ance.$parent()
        c = c+1
    }
    return(null)
}

function _ances(nd,including_self=false) {
    let ances = []
    let ance = nd
    if(including_self) {
        ances.push(ance)
    } else {
    } 
    ance = ance.$parent()
    while(ance !== null)  {
        ances.push(ance)
        ance = ance.$parent()
    }
    return(ances) 
}

function _some_ances(nd,...indexes) {
    let ances = _ances(nd,including_self=true)
    let some = ances.filter(
        (r,i) => indexes.includes(i)
    )
    return(some)      
}

function _ances_count(nd,including_self=false) {
    let ances = _ances(nd,including_self)
    return(ances.length)
}


/**/


/*add node */

function _prepend_child(nd,child) {
    //只有根节点才可以被链接到另一颗树上
    let cond = nd.$is_leaf()
    child._tree = nd._tree
    child._lsib = null
    if(cond){
        //child 也是lstch
        child._rsib = null
        child._parent = nd
    } else {
        //变更old_fstch
        let old_fstch = nd._fstch
        //old_fstch 不再是fstch
        old_fstch._lsib = undefined
        //更新child
        child._rsib = old_fstch
        //添加child 
    }   
    nd._fstch = child
}   


function _append_child(nd,child) {
    let cond = nd.$is_leaf() 
    child._tree = nd._tree
    child._rsib = null
    if(cond){
        //child 也是lstch
        nd._fstch = child
        child._lsib = null
    } else {
        //变更old_lstch
        let old_lstch = nd.$lstch() 
        //old_lstch 不再是lstch
        old_lstch._parent = undefined
        old_lstch._rsib = child
    }
    child._parent = nd
}



function _add_rsib(nd,rsib) {
    //root 不可操作
    if(nd.$is_root()) {
        console.log("cant addrsib to root")
        return(nd)
    }
    //
    let cond = nd.$is_lstch()
    rsib._tree = nd._tree
    if(cond) {
        rsib._parent = nd._parent
        nd._parent = undefined
        rsib._rsib = null
    } else {
        rsib._rsib = nd._rsib
    }
    nd._rsib = rsib
}


function _add_lsib(nd,lsib) {
    //root 不可操作
    if(nd.$is_root()) {
        console.log("cant addlsib to root")
        return(nd)
    }
    //
    let cond = nd.$is_fstch()
    lsib._tree = nd._tree
    if(cond) {
        let parent = nd.$parent() 
        nd._lsib = undefined
        lsib._lsib = null
        parent._fstch = lsib
    } else {
        let old_lsib = nd.$lsib()
        old_lsib._rsib = lsib
    }
    lsib._rsib = nd
}


function _insert_child(which,nd,child) {
    let children = nd.$children()
    let lngth = children.length
    if(lngth ===0) {
        nd.$prepend_child(nd,child)
    } else {
        let cond = (which<=lngth) && (which >=0)
        if(!cond) {
            console.log("not in range!!")
            return(nd)
        } else {
            if(which === 0) {
                nd.$prepend_child(nd,child)
            } else if(which === lngth) {
                nd.$append_child(nd,child)
            } else {
                let lnd = children[which-1]
                lnd.$add_rsib(child)
            }   
        }   
    }   
}   




/**/
function _add_extra(d,nd) {
    for(let k in d) {
        nd[k] = d[k]
    }
}


/**/

class _Node {
    constructor() {
        this._fstch = null
        this._lsib = undefined
        this._rsib = undefined
        this._parent = undefined
        this._tree = undefined
        this.$guid = cmmn.gen_guid()
    }
    $is_inited() {
        return(_is_inited(this))
    }
    $is_root() {
        return(_is_root(this))
    }
    $is_fstch() {
        return(_is_fstch(this))
    }
    $is_lstch() {
        return(_is_lstch(this))
    }   
    $is_leaf() {
        return(_is_leaf(this))
    }
    $is_lonly() {
        return(_is_lonely(this))
    }
    //child
    $fstch() {
        return(this._fstch)
    }
    $lstch() {
        return(_lstch(this))
    }
    $which_child(index) {
        return(_which_child(index,this))
    }
    $some_children(...indexes) {
        return(_some_children(this,...indexes))
    }
    $children() {
        return(_children(this))
    }
    $children_count() {
        return(_children_count(this))
    }
    //
    $rsib() {
        return(this._rsib)
    }
    $lsib() {
        return(_lsib(this))
    }
    $fstsib(including_self=false) {
        return(_fstsib(this,including_self))
    } 
    $lstsib(including_self=false) {
        return(_lstsib(this,including_self))
    }
    $psibs() {
        return(_psibs(this))
    }
    $fsibs() {
        return(_fsibs(this))
    }
    $which_sib(index) {
        return(_which_sib(index,this))
    }
    $some_sibs(...indexes) {
        return(_some_sibs(this,...indexes))
    }
    $sibseq() {
        return(_sibseq(this))
    }
    $sibs(including_self=false) {
        return(_sibs(this,including_self))
    }
    $sibs_count(including_self=false) {
        return(_sibs_count(this,including_self))
    } 
    //
    $parent() {
        return(_parent(this))
    } 
    $root() {
        return(_root(this))
    } 
    $ances(including_self=false) {
        return(_ances(this,including_self))
    }
    $which_ance(index) {
        return(_which_ance(index,this))
    }
    $some_ances(...indexes) {
        return(_some_ances(this,...indexes))
    }
    $ances_count(including_self=false) {
        return(_ances_count(this,including_self))
    }
    //
    $prepend_child(child) {
        child = (child===undefined)?(new _Node()):child
        _prepend_child(this,child)       
    }
    $insert_child(which,child) {
        child = (child===undefined)?(new _Node()):child
        _insert_child(which,this,child)
    }
    $append_child(child)  {
        child = (child===undefined)?(new _Node()):child
        _append_child(this,child)
    }
    //
    $add_rsib(rsib) {
        rsib = (rsib===undefined)?(new _Node()):rsib
        _add_rsib(this,rsib)
    }
    $add_lsib(lsib)  {
        lsib = (lsib===undefined)?(new _Node()):lsib
        _add_lsib(this,lsib)
    }    
}


class Node extends _Node {
    constructor() {
        //初始化为根节点,根节点代表一棵树
        super();
        this._fstch = null
        this._lsib = null
        this._rsib = null
        this._parent = null
        this._tree = this
    }
}

module.exports = {
    Node,
}


/*
var ndcls = require('./ndcls')
var rt = new ndcls.Node()
rt.$append_child()
rt.$append_child()
rt.$append_child()
rt.$prepend_child()
rt.$prepend_child()
rt.$prepend_child()



assert.strictEqual(rt.$children_count(),6)
rt.$fstch().$guid
rt.$lstch().$guid
assert.strictEqual(rt.$which_child(2).$guid,rt.$fstch()._rsib._rsib.$guid)
rt.$children().map(nd=>nd.$guid)
rt.$some_children(0,2,4).map(nd=>nd.$guid)


assert.strictEqual(rt.$rsib(),null);
assert.strictEqual(rt.$lsib(),null);
rt.$fstsib()
rt.$lstsib()
rt.$psibs()
rt.$fsibs()
rt.$sibs()
rt.$which_sib(0).$guid === rt.$guid

var nd = rt.$which_child(2)
assert.strictEqual(nd.$fstsib(),rt.$fstch());
nd.$lstsib().$guid
nd.$which_sib(0).$guid
nd.$psibs().map(nd=>nd.$guid)
nd.$fsibs().map(nd=>nd.$guid)
nd.$sibs(including_self=true).map(nd=>nd.$guid)
nd.$which_sib(3).$guid
nd.$sibseq()
nd.$some_sibs(1,3).map(nd=>nd.$guid)
nd.$guid
nd.$add_lsib()
nd.$sibs(including_self=true).map(nd=>nd.$guid)
nd.$add_rsib()
nd.$sibs(including_self=true).map(nd=>nd.$guid)


rt.$insert_child(3)
nd.$sibs(including_self=true).map(nd=>nd.$guid);


assert.strictEqual(rt,nd.$parent());


nd.$append_child()
nd.$append_child()


nd = rt.$which_child(3)
nd.$append_child()
nd.$append_child()


nd = nd.$fstch()

*/

