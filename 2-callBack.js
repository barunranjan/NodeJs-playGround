const doWorkCallBack = (callback)=>{
    setTimeout(()=>{
        // callback('this is my error', undefined)
        callback([1,4,7],'error')
    },2000)

}

doWorkCallBack((err, res)=>{
    if(err){
        return console.log(err)
    }
    console.log(res)
})