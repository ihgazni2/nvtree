const {ZWNJ} = require("nv-facutil-basic");
const {rename_cls} = require("nv-facutil-name");
const {creat_id} = require("nv-facutil-basic");


const {init_tag} = require("./tag");
const {
    RECV_FROM
} = require("./sym");


class Node extends EventTarget {
    #mp = new Map();
    #fstch = null
    #lsib = null
    #rsib = null
    #parent = null
    #root = null
    ////
    #id = creat_id(); 
    #tag = ''
    ////
    #open_at_ = -1;
    #close_at_ = -1;
    ////
    #recv_from = (src,data)=>{}
    ////
    constructor(tag) {
        //super();
        this.#tag = init_tag(tag,this.#id);
        this.#mp.set(this.#id,this);
        this.#root = this.#id;
    }
    
    ////
    get tag() {return(this.#tag)}
    set tag(tag) {this.#tag = init_tag(tag)}
    ////
    get fstch()  {return(this.#mp.get(this.#fstch))}
    get lsib()   {return(this.#mp.get(this.#lsib))}
    get rsib()   {return(this.#mp.get(this.#rsib))}
    get parent() {return(this.#mp.get(this.#parent))}
    ////
    get root() {return(this.#mp.get(this.#root))}
    ////
    get recv_from_handler()  {return(this.#recv_from)}
    set recv_from_handler(f) {this.#recv_from = f}
    [RECV_FROM](src,data) {return(this.#recv_from(src,data))}
    send_to(dst,data) { return(dst[RECV_FROM](this,data))}
    ////event-target 不能和 Symbol.toStringTag 一起工作
    get [Symbol.toStringTag]() { return(this.#tag)}
}

rename_cls(Node,ZWNJ)
