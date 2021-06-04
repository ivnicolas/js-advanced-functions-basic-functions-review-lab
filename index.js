// Your code here

function saturdayFun(task = "roller-skate"){
    return `This Saturday, I want to ${task}!`
}

function mondayWork(work = "go to the office"){
    return  `This Monday, I will ${work}.`
}

function wrapAdjective(flair='*'){
    return function(word){
        return `You are ${flair}${word}${flair}!`
    }
}


let Calculator = {
    add: function(a,b){return a + b
    },
    subtract:function(a,b){return a - b
    },
    multiply:function(a,b){return a * b
    },
    divide:function(a,b){return a / b
    },
    
}

function actionApplyer(start, ray){
    let a = start

    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a

}

// function(){
//     let Calculator = {}
// }
// let calculator -
// let calculator = {
//     return function add(a,b){
//         return `${a} + ${b}`
//     },
//     return function subtract(a,b){
//         return `${a}  ${b}`
//     },
//     return function multiply(a,b){
//         return `${a} * ${b}`
//     },
//     return function device(a,b){
//         return `${a} / ${b}`
//     }
// }