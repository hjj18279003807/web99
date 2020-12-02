
Object2.prototype2 = {
    __proto__ :null
}
function Object2(){
    this.__proto2__= Object2.prototype2;
    
}


function apple(){
    this.__proto__ = Object2.prototype2
}
Object2.lprototype2= {
    __proto__ :null
}

let obj = new Object2()
console.log(obj.__proto__.__proto__)