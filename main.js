// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');

function addZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}

function time() {
  //clock
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();

  hourTime.innerHTML =    `${addZero((hr % 12) || 12)}`
  minTime.innerHTML  =    `${addZero(min)}`
  secTime.innerHTML  =    `${addZero(sec)}`
  aMpM.innerHTML     =    `${hr >= 12 ? 'PM' : 'AM'}`

}
setInterval(time, 1000);
// clock section end






const mssgUpdate = document.querySelector('#mssg');
const themeIMG = document.querySelector('.box-2-image');
const wishHeading = document.querySelector('.wish');
const wishHeadingBox = document.querySelector('.wish-heading');


//img change according to time
var d = new Date();
var hr = d.getHours();

//function for morning 
function morning(){
  mssgUpdate.innerText ="Wake UP!";
  wishHeadingBox.style.display="block";
  wishHeading.innerText ="Good Morning!!";
  themeIMG.style.backgroundImage = "url('./Sunny day-bro.svg')";
}

//function for noon 
function noonAfter(){
  mssgUpdate.innerText ="Have Some Lunch!!";
  wishHeadingBox.style.display="block";
      wishHeading.innerText ="Good Afternoon!!";
      themeIMG.style.backgroundImage = "url('./Pizza sharing-cuate.svg')";
}

//function for night 
function nightFun(){
mssgUpdate.innerText ="Go to bed and sleep!!";
wishHeadingBox.style.display="block";
wishHeading.innerText ="Good Night!!";
themeIMG.style.backgroundImage = "url('./Sleep analysis-cuate.svg')";
}
function chillKaro(){
  mssgUpdate.innerText ="Just Relax";
    wishHeading.innerText ="";
    wishHeadingBox.style.display="none";
    themeIMG.style.backgroundImage = "url('./chill.svg')";
  }
  chillKaro();



//party btn
const partyBtn = document.querySelector('.wish-button');


partyBtn.addEventListener("click", ()=>{
      partyBtn.innerHTML ="Double click to end party";
      mssgUpdate.innerText ="Party is on";
      wishHeading.innerText ="Let's Party";
      themeIMG.style.backgroundImage = "url(./party2.svg)";
});

partyBtn.addEventListener("dblclick", ()=>{
    partyBtn.innerHTML ="Let's Party";
    chillKaro()    
});



//time slot - morning
const morningSlot = document.querySelector('.morning-slot');



morningSlot.addEventListener("change", function (){ 


  console.log(hr);
  console.log(this.value);

  if (this.value==hr) {    
      morning();}

   else{
    mssgUpdate.innerText ="Just Relax";
    wishHeadingBox.style.display="none";



    themeIMG.style.backgroundImage = "url('./chill.svg')";
   }

});


//time slot - noon
const noonSlot = document.querySelector('.noon-slot');
noonSlot.addEventListener("change", function (){
  if (this.value==hr) {    
   noonAfter();}

 else{
  mssgUpdate.innerText ="Just Relax";
  wishHeading.innerText ="";
  wishHeadingBox.style.display="none";
  themeIMG.style.backgroundImage = "url('./chill.svg')";
 }

});

//time slot-night
const nightSlot = document.querySelector('.night-slot');

nightSlot.addEventListener("change", function (){
  if (this.value==hr) {    
    nightFun();}

 else{
  mssgUpdate.innerText ="Just Relax";
  wishHeading.innerText ="";
  wishHeadingBox.style.display="none";
  themeIMG.style.backgroundImage = "url('./chill.svg')";
 }
});












// kachra 
// const checkE = document.getElementById('check');
// checkE.addEventListener("click",()=>{
//   if(checkE.value == "9AM"){
//     console.log("hey there")
//   }
// else{
//   console.log("nhi horhja")
// }
// });

// console.log(checkE)







// function realTimeFun(){

// if(hr>=5 && hr<12){  

//   morning();

//   }else if(hr>=12 && hr<18){  
    
//     noonAfter();

//   }else if(hr>=18 && hr<24){  
//        nightFun();   
//   }else{
    
//       mssgUpdate.innerText ="Jo Karna Hai Karo";
//       wishHeading.innerText ="Chill Karo";
//       themeIMG.style.backgroundImage = "url('./chill.svg')";

//   }
// };
// realTimeFun();