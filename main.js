console.log("hello node js");

const pin = process.env.PIN
console.log(pin);

let argument = process.argv
argument.push(pin)
console.log(argument);

if(pin==666){
    console.log("Welcome Admin");
}else{
    console.log("Access restricted");
}

