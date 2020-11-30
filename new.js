// var lichee = function (){ console.log("this is lichee-1") 
// return "this is lichee-2"
// }()
// console.log(lichee)

// let banana	= function banana(){ console.log("this is banana-1")
// return ()=> function(){console.log("this is Anonymous function")}()
// }
// banana()()


// let grape = function redGrape(){
//     return {
//     name:"my name is red grape", printMyName:()=>{
//     return ()=>{
//     return Object.create({
//     name:"my name is grape nut", printMyGrapeNut:function(){
//     console.log("this is MyGrapNut")
//     }
//     })
//     }
//     }
//     }
//     }
//     grape().printMyName()().printMyGrapeNut()

// let red = function redApple(){
//     return ()=>{
//     return function(){ return ()=>{
//     return	function(){ console.log("this is red apple")
//      return "this is blue apple"
//     }
//     }
//     }
//     }
//     }
    
//     let apple = function redApple(){ console.log(red()()()()())
//     }()

(function(x){
    x()
    console.log("this is yellow orange") 
    console.log(function blueOrange(){
    console.log("this is blue orange")
    }())
    
    
    })(function(){
    console.log("this is orange") 
    return "this is red orange"
    })