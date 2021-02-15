const {get_abbr} = require("nv-facutil-basic");


function init_tag(tag,id) {
    tag = (tag === undefined)?get_abbr(id):tag.toString();
    return(tag)
}


module.exports = {
    init_tag
}

