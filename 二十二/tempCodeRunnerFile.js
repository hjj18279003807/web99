console.log((function(X){
    console.log("this is pitaya 2")
    X.printName = function(){
        console.log("this is print name")
        return 223
    }
    return X() + X.printName()
})(()=>{console.log("this is arrow function");
return 777}))