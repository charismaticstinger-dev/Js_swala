//IIFE = Immediate Invoked Function Expression
//the function runs immediately 
//anythin inside the function remains local without pulling in the global environment

//exapmle 1
(function(){
    console.log("this is a immediately invoked function")
})();


//creat a self calling anonymous function to two addind numbers
(function(){
    let x = 67
    let y = 45
    console.log(x+y)
})();
//x and y are only inside iife
// outside the function,x does not exist(only available on local environment)