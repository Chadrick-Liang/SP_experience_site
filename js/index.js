"use strict";
//type writer intro
//an array containing all the characters of the intro message as elements.
var message1 = [
  'H', 'e', 'l', 'l', 'o', '<br>', 'I', ' ', 'a',
  'm', ' ', 'C', 'h', 'a', 'd', 'r', 'i', 'c',
  'k', '.' , '<br>', 'A', ' ', 'c', 'u', 'r', 'r', 'e',
  'n', 't', ' ', 's', 't', 'u', 'd', 'e', 'n',
  't', ' ', 'o', 'f', ' ', 'S', 'i', 'n', 'g',
  'a', 'p', 'o', 'r', 'e', ' ', 'P', 'o', 'l',
  'y', 't', 'e', 'c', 'h', 'n', 'i', 'c', '.'];
//counter to indicate which index of the array the function is currently at.
var i = 0;
//duration set for the timeout before typeWriter() is called again
var speed = 100;

function typeWriter() {
  if (i <= message1.length) {
    //creates a substring up to the current character and appends a block to it
    document.getElementById("intro1").innerHTML = message1.slice(0, i + 1).join("") + "<span id='block'>\u25ae</span>";
    i++;
    setTimeout(typeWriter, speed);
  }
}

//remove the block after the typewriter function is done typing
function removeBlock() {
  document.getElementById("intro1").innerHTML = "Hello<br>I am Chadrick.<br>A current student of Singapore Polytechnic.";
}

//info deliver
//Downloaded from https://unsplash.com/photos/_6HzPU9Hyfg (Zac Durant)
//Downloaded from https://pixabay.com/photos/safety-shoe-osh-screw-2432467/ (Ralphs_Fotos)
//Downloaded from https://pixabay.com/photos/board-school-university-research-4444443/ (Geralt)
//Downloaded from https://pixabay.com/illustrations/geometry-mathematics-dice-1023846/ (Geralt)
//Downloaded from https://pixabay.com/photos/letter-envelope-flowers-stamps-1390463/(Pezibear)
//Downloaded from https://pixabay.com/photos/adult-mother-daughter-beach-kids-1807500/ (Sasint)
//Downloaded from https://pixabay.com/photos/pasture-fence-barbed-wire-fencing-1995820/ (Pixel2013)
//Downloaded from https://pixabay.com/photos/adult-ambulance-background-care-4402808/ (Ckstockphotot)
const imgList = ["img/no-worry.jpg",
                 "img/injury.jpg", 
                 "img/teacher.jpg", 
                 "img/study.jpg", 
                 "img/stamp.jpg", 
                 "img/daughter.jpg", 
                 "img/obstacle.jpg", 
                 "img/complaint.jpg"];
const wordList = ['大丈夫','怪我', '先生', '勉強', '切手', '娘', '邪魔', '文句'];
const lineList = ["In Chinese this would mean 'husband' or 'great man'. In modern Japanese however, it has adopted the meaning of 'I am alright' or 'It is fine, don't worry'",
                  "In Chinese, this would literally translate to 'to blame me'. In modern Japanese however, it means 'injury'.",
                  "In Chinese, this would mean 'mister' as a way of addressing people. In modern Japanese however, it means 'teacher'.", 
                  "In Chinese, this would mean 'to force something to happen'. In modern Japanese however, it means 'to study'.", 
                  "In Chinese, this would literally translate to 'to cut one's hands'. In modern Japanese however, it means 'postal stamp'.", 
                  "In Chinese, this would be an old fashioned way of saying 'mother'. In modern Japanese however, it means 'daughter'.", 
                  "In Chinese, this would mean 'evil spirit' or 'demon'. In modern Japanese however, it means 'obstacle' or 'obstruction'.", 
                  "In Chinese, this would mean 'sentence of an article'. In modern Japanese however, it means 'complaint'."];

//generates a random number to specify a member of the arrays. Displays the card associated with that generated index.
function nextInfo() {
  var index = Math.floor(Math.random() * 8);
  document.getElementById("info-img").src = imgList[index];
  document.getElementById("info-word").textContent = wordList[index];
  document.getElementById("info-line").textContent = lineList[index];

}

//Runs typeWriter() upon loading webpage.
window.addEventListener("load", typeWriter);
//Removes the display block on the intro message after 10s
setTimeout(removeBlock, 10000);