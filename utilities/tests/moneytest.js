import {formatcurrency} from "../money.js"
console.log("TEST SUITE : FORMAT CURRENCY FUNCTION");

console.log("convert cents into dollars");

if(formatcurrency(2095)==='20.95'){
    console.log("passed");
} 
else{
    console.log("failed");
    
}
console.log("it works with 0");
if(formatcurrency(0)==='0.00'){
    console.log("passed");
} 
else{
    console.log("failed");
    
}
console.log("rounding to the nearest value");
if(formatcurrency(2000.5)==='20.01'){
    console.log("passed");
} 
else{
    console.log("failed");
}
console.log("it works with nearest value ");
if(formatcurrency(2000.4)==='20.00'){
    console.log("passed");
} 
else{
    console.log("failed");
    
}