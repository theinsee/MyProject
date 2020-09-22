
var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// console.log(randomData);
let Mdata = [] 
let randomData = ()=> {return parseInt(Math.random()*100000)};
mL.forEach(element => {
   
    let predata = {"debit":(randomData()*1.25),"credit":(randomData()*.5)}
    Mdata.push(predata)
});

let D_debit= {
    "AR":(randomData()*.3),
    "more":(randomData()*.5)
}
let D_credit= {
    'OF':(randomData()*.4),
    'AP':(randomData()*.5),
    'MA':(randomData()*.6)
}

console.log(Mdata);