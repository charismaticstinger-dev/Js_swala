// if...else if..else(used in multiple conditions)
let age = -8
if(age < 0){
    console.log("invalid age")
}
else if(age <= 18){
    console.log("your a minor");
}else if(age > 18 && age< 20){
    console.log("your an adult but cant drink");
}else{
    console.log("your an adult and can drink");
}