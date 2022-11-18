const fs = require('fs')

const p  = new Promise(function(resolve,reject){
    fs.readFile('./为学.md',(err,data)=>{
        if(err)reject(err)
        resolve(data)
    })
})

p.then(res=>{
    console.log(res.toString());
},(err)=>{
    console.log('失败');
})