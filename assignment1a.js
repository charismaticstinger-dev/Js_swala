let distance = 1000;
if (distance < 0){
    console.log("invalid")
}else if(distance> 0 && distance<100){
    console.log("pay 5 USD")
}else if(distance >101 && distance < 500){
    console.log("pay 10 USD")
}else if(distance >501 && distance < 1000){
    console.log("pay 20 USD")
}else{
    console.log("pay 40 USD")
}
