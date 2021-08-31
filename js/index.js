// Your code goes here
// 10 different types of event listner

// busimage onclick change to different picture
const busImg=document.querySelector('.intro img');
busImg.onclick= function(){
    console.log('clicked on busimage');
}

// nav a mouseover change font color
const navA=document.querySelectorAll('.nav a');
navA.forEach(function(item){
    item.addEventListener('mouseover',function(event){
        console.log('about to press one of the nav a');
        item.style.color="red";
    })
})

// scroll will change text of nav a to bold
const headOne=document.querySelector('*');
headOne.addEventListener('wheel',function(event){
    console.log("user is scrolling");
   headOne.style.fontWeight="bold";

})