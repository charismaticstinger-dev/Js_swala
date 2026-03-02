// Anonymous function = does not have a name its bassically stored in a variable
//example
const greet = function(){
    console.log("arooo...greatness all along")
}
//call the function using the variable name which is greet
greet()
//anonymous function function with parameters to check the diffrence of two numbers
const diffrence = function(num1,num2){
    let diffrence = num1 - num2
    console.log(`the diffrence is ;${diffrence}`)
}
diffrence(20,2)

// own example
const add = function(pat1,pat2){
    let add = pat1 + pat2
    console.log(`the addition is;${add}`)
}
add(20,80)

//multiplication
const multiplication = function(multi1,multi2){
    let answer = multi1 * multi2
    console.log(`the answer;${answer}`)
}
multiplication(60,2)