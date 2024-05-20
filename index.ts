#! /usr/bin/env node
import inquirer from "inquirer";
console.log("BMI CALCULATOR")
let msg = await inquirer.prompt([
  {
    message: "Enter Your Weight",
    type: "number",
    name: "weight",
  },
  {message:"Enter Your Height in cm",type:"number",name:"height"}
]);
let bmi = (msg.weight/(msg.height**msg.height))
console.log(`Your BMI is: ${bmi.toFixed(1)}`)

if(bmi<=18.5){
    console.log("You are under weight")
}
else if(bmi<=25){
    console.log("Your weight is normal")
}
else if(bmi<=30){
    console.log("You are over weight")
}
else{
    console.log("You are obese")
}
