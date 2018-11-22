/*
let btn = document.querySelector('#loginform');
let hide =document.querySelector("#btn");
let show = document.querySelector("#btn2");

hide.addEventListener('click',function()
{
    btn.style.display="none";

})

show.addEventListener('click',function()
{
    btn.style.display="inline";

})

let salary =prompt("please enter your salary in hundred denomination");
//salary = input("please enter your salary");

if(salary>=15000 && salary<=30000)
{
    console.log("Dear customer You are qualified for a #10,000 loan");
}
else if(salary>=31000 && salary<=60000)
{
    console.log("Dear customer You are qualified for a #15,000 loan");
}
else if(salary>=61000 && salary<=100000)
{
    console.log("Dear customer You are qualified for a #30,000 loan");
}
else if(salary>=10100)
{
    console.log("Dear customer You are qualified for a #50,000 loan");
}
else
{
    console.log("sorry you are not qualified for a loan check back later")
}


let matric =prompt("please enter ur matric number");
let depart = matric.slice(3,6);
if(depart == 211)
{
    console.log("you are in department of computer enginer")
}
else if(depart == 231)
{
    console.log("you are in department of chemical enginer")
}
else if(depart == 221)
{
    console.log("you are in department of mechanical enginer")
}
else{
    console.log("you are not a student")
}
*/

let signup =document.querySelector('.btnsignup');
let hidebtn =document.querySelector('.btnlogin');

let design =document.querySelector('.formsignup')

signup.addEventListener('click',function(){
     
    design.style.display="block";
})

hidebtn.addEventListener('click',function(){
    design.style.display="none";
})