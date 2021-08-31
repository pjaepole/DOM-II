// Your code goes here
// 10 different types of event listner

// busimage onclick change to different picture
const busImg=document.querySelector('.intro img');
busImg.onclick= function(){
    console.log('clicked on busimage');
    busImg.style.borderRadius= "60%";
}

// nav a mouseover change font color
const navA=document.querySelectorAll('.nav a');
navA.forEach(function(item){
    item.addEventListener('mouseover',function(event){
        console.log('about to press one of the nav a');
        item.style.color="red";
    })
})

// scroll will change text to bold
const headOne=document.querySelector('*');
headOne.addEventListener('wheel',function(event){
    console.log("user is scrolling");
   headOne.style.fontWeight="bold";

})

// bussimage double click will revert fontweight and busimg border radius
busImg.addEventListener('dblclick',function(event){
    console.log('double clicked an bus image');
    busImg.style.borderRadius= "1%";
    headOne.style.fontWeight= "normal";
})


// when finish loading the bus image alert welcome
busImg.addEventListener('load',function(event){
    console.log("consolelogging before alert");
    return alert("Welcome to the Fun Bus Travel Agency")
})