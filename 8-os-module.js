
const { Console } = require('console');
//require bulit in models 
const os= require('os')
//info about current user 
const user=os.userInfo()
console.log(user);
//method returns the sysstem  uptime in seconds
console.log(`this system Uptime is ${os.uptime()} seconds`)
const current={
    name:os.type(),
    relese:os.release(),
    totalMen:os.totalmem(),
    freeMen:os.freemem(),

}
console.log(current)