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



const headerOne=document.querySelector('.logo-heading');
headerOne.addEventListener('dblclick',function(event){
    console.log('you selected header one');
    headerOne.style.border= "thick solid black";
})

// header2 select eventlistener
const headTwo=document.querySelectorAll('h2');
console.log(headTwo);
headTwo.forEach(function(items){
    items.addEventListener('select', function(event){
        console.log('about to select one of the h2 tags');
       
    })
})

//created ptag >gave id>and added createPtag to the DOM>
const createPtag = document.createElement('p');
createPtag.setAttribute('id','createdPtag');
console.log(createPtag);
document.body.appendChild(createPtag);
createPtag.textContent='is this correct?';



function hopeitwork(event){
const createdPtag= document.getElementById('createdPtag');
const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
log.textContent= `you selected: ${selection}`

}

//footer select idk
const footerP=document.querySelector('footer p');
footerP.addEventListener('select',function(event){
    console.log('selected footer');
} )
console.log(footerP);



// keydown eventlistener
headOne.addEventListener('keydown',function(event){
    console.log(`you pressed a key`);
    if (event.key==='Enter'){
        console.log('you pressed enter')
    }else if(event.key==="Tab"){
        console.log('you pressed tab key')
    }

})


//drag event listener
const dragevent=document.querySelector('.img-content img');
dragevent.addEventListener('drag',function(event){
    console.log('you dragged')
    dragevent.style.border="none";
})
dragevent.addEventListener('dragover',function(event){
    dragevent.style.border="thick solid black";
})


//select home button reload page Html.index reload
window.addEventListener('resize',function(event){
    console.log('window is resized');
    return this.location.reload();
})