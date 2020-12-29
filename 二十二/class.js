+function(){
    console.log("this is pitaya")
}()

console.log((function(X){
    console.log("this is pitaya 2")
    X.printName = function(){
        console.log("this is print name")
        return 223
    }
    return X() + X.printName()
})(()=>{console.log("this is arrow function");
return 777}))
function watermelon(name,price,number){
    this.name = name
    this.price = price
    this.number = number
}
watermelon.prototype.getsum = function(){
    console.log(this.price * this.number)
} 