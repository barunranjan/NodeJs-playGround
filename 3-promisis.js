const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([2,5,7])
        reject('error happen')
    },2000)
})
doWorkPromise.then((result)=>{
    console.log('success', result)
}).catch((err)=>{
    console.log(error)
})