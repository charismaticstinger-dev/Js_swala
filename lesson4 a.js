// functions with parameters -- accept arguments 
function greet(name){
    console.log("hello " +name)
}
//call the function
greet("bobo")// its accepting arguments
greet("tenny")
greet("taitan")

//write a js function that is accepting county_name as parameter and log a message , my county is + county_name
function myCounty(county_name){
    console.log ("my county is ;"+county_name)
}
myCounty("Nairobi")
myCounty("Mbooni")
myCounty("naivasha")
myCounty("kilifi")

// creat a function called add which is accepting num1 and num2 as parameters to find the sum of two numbers
function add(num1,num2){
    let answer = num1 + num2
    console.log(`the answer is ;" ${answer}`)
}
//call your function with arguments
add(23,80)