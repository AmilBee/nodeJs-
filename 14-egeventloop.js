const { readFile } = require("fs");

console.log(`start a first task`);
//check file path 
readFile(`./content/subfolder/first.txt`,'utf8',(err,reult)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(reult)
    console.log('completed first task')
})
console.log('starting next task')