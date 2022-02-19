/*
----------------------------------------------
 *  Project:    Star 365 Day Clock Face
 *  Mail:       darahbass@gmail.com
 *  Github:     SarahBass
 ---------------------------------------------
 NOTES: 
 This Clock will be larger than normal
 because it has so many image backgrounds.
 
 Images are ALL Free Licence https://unsplash.com
 
 The use of jpegs help reduce size from 229 mb
 300x300PNG to 20 mb JPEG for each background
 -jpegs load slower than PNG in Fitbit Studio-
  USE PNG for numbers and animations for
 faster upload, and jpeg for backgrounds
 
 ---------------------------------------------
*/

/*--- Import Information from user Account ---*/
import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from 'power';
import { display } from "display";
import { today as userActivity } from "user-activity";
import {goals, today} from "user-activity";

let background = document.getElementById("background");
let starobject = document.getElementById("starobject");
let mouthobject = document.getElementById("mouthobject");
let eyesobject = document.getElementById("eyesobject");
let cheeksobject = document.getElementById("cheeksobject");
let cuteobject = document.getElementById("cuteobject");
let star = document.getElementById("star");
let mouth = document.getElementById("mouth");
let eyes = document.getElementById("eyes");
let cheeks = document.getElementById("cheeks");
let cute = document.getElementById("cute");
clock.granularity = "seconds";


clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let months = today.getMonth();
  let days = today.getDay();
  let dates = today.getDate();
  let years = today.getFullYear();
  let mins = util.zeroPad(today.getMinutes());
  let seconds = today.getSeconds();
  
  }
  
  /*----------------------------SHOW CLOCK END----------------------------------*/
  //ANIMATIONS

  //PLAY FLOAT ANIMATION
  if ( mins % 2 == 0){
                         if (seconds % 2 == 0){mouth.image = "star/notongue.png";}
                         else{mouth.image = "star/littlemouth.png";}     
                         float();
  //PLAY STAND ANIMATION - MOUTH CHANGES EVERY 10 MINUTES  
  }else{            
                   if ( parseInt(mins/10) == 1 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/littlemouth.png";}
                   else{mouthobject.image = "star/tinymouth.png";}}
                 else if (parseInt(mins/10) == 2 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/circlemouth.png";}
                   else{mouthobject.image = "star/tinycirclemouth.png";}}
                                     
                 else if ( parseInt(mins/10) == 3 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/tinycirclemouth.png";}
                   else{mouthobject.image = "star/mouth.png";}}  
                 
                 else if (parseInt(mins/10) == 4 ){ 
                   if (seconds % 2 == 0){mouthobject.image = "star/littleovalmouth.png";}
                   else{mouthobject.image = "star/tinymouth.png";}}
                 
                 else if (parseInt(mins/10) == 5 ){
                   if (seconds % 2 == 0){mouthobject.image = "star/littlemouth.png";}
                   else{mouthobject.image = "star/tinymouth.png";}}

                 else if (parseInt(mins/10) == 6 ){ 
                   if (seconds % 2 == 0){mouthobject.image = "star/notongue.png";}
                   else{mouthobject.image = "star/littlemouth.png";}}
                 
                 else if (parseInt(mins/10) == 0 ){ 
                   if (seconds % 2 == 0){mouthobject.image = "star/tinymouth.png";}
                   else{mouthobject.image = "star/tinycirclemouth.png";}}
                
       stand();
      }
      
      /*----------------------------START OF FUNCTIONS--------------------------------*/
      
//Animation Functions   
function float (){
//if goal is reached give prize                         
       if (goalreached == "show"){ 
                           if ((months == 2)||(months == 3)){star.image = "star/bunny" + (dates % 10) + ".png";}
                           else if (months == 9){star.image = "star/ghost" + (dates % 10) + ".png";}
                           else if (months == 11){star.image = "star/santa" + (dates % 10) + ".png";}
                           else {star.image = "star/" + (dates % 10) + ".png";}}
//if goal is not reached yellow star
       else{star.image = "star/yellow.png";}
  
  eyes.image = "star/eyes.png";
  mouth.image;
  cheeks.image = "star/cheeks.png";
  cute.image;
  starobject.image = "";
  eyesobject.image = "";
  mouthobject.image = "";
  cheeksobject.image = ""; 
  cuteobject.image = "";
  setTimeout(() => {
  demoinstance.animate("enable"); 
   }, 600);
}  

function stand(){
  if (goalreached == "show"){ 
                           if ((months == 2)||(months == 3)){starobject.image = "star/bunny" + (dates % 10) + ".png";}
                           else if (months == 9){starobject.image = "star/ghost" + (dates % 10) + ".png";}
                           else if (months == 11){starobject.image = "star/santa" + (dates % 10) + ".png";}
                           else {starobject.image = "star/" + (dates % 10) + ".png";}
  } else{ starobject.image = "star/yellow.png";}
  
  
  star.image = " ";
  eyes.image = " ";
  mouth.image = " ";
  cheeks.image = " ";
  cute.image = " ";
  eyesobject.image = "star/closedeyes.png";
  mouthobject.image;
  cheeksobject.image = "star/cheeks.png";
  cuteobject.image; 
  
}  
}
/*----------------------------END OF FUNCTIONS--------------------------------*/
/*-------------------------------END OF CODE----------------------------------*/
