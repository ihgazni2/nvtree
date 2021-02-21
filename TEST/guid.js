const {v4} = require("uuid")

function gen_guid() {
    return(
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function(c) {
                let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
                return(v.toString(16))
            }
         )
    )
}

function tst(times,f,...args) {
    let start = perf_hooks.performance.nodeTiming.duration
    c= 0
    while(c<times) {f(...args);c=c+1}
    let end = perf_hooks.performance.nodeTiming.duration
    console.log(end-start)
}

tst(1000000,v4)
tst(1000000,gen_guid)


> tst(1000000,v4)
2068.962634086609
undefined
> tst(1000000,gen_guid)
7734.055861949921
undefined
>

