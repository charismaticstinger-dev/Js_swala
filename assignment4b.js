const { useSyncExternalStore } = require("react")

const geradeStudent = function(marks1,marks2,marks3){
    let average = marks1+marks2+marks3/3
    let answer = average
    if (average>=100 && average<0){
        console.log("invalid marks")
    }else if(average>=70){
        console.log("grade A")
    }else if(average>=60 && average<70){
        console.log("grade B")
    }else if(average >=50 && average <60){
        console.log("grade C")

        console.log(Fail)
    }
    
}