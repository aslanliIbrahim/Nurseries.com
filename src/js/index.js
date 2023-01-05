const crslContent = document.querySelectorAll(".caruesel-content");

const cardAnimatie = [
  { transform: "scale(1)" },
  { transform: "scale(1.02)" },
  { transform: "scale(1.03)" },
  { transform: "scale(1.04)" },
];

const cardanimation = {
  duration: 10000,
  iterations: 1,
};

for (let i = 0; i < crslContent.length; i++) {
  const currentContent = document.querySelectorAll(
    ".caruesel-content.animation-class"
  );
  if (crslContent[i].dataset.target === "1") {
    crslContent[i].addEventListener("mouseover", function () {
      crslContent[i].animate(cardAnimatie, cardanimation);
    });
  } else if (crslContent[i].dataset.target === "2") {
    crslContent[i].addEventListener("mouseover", function () {
      crslContent[i].animate(cardAnimatie, cardanimation);
    });
  } else if (crslContent[i].dataset.target === "3") {
    crslContent[i].addEventListener("mouseover", function () {
      crslContent[i].animate(cardAnimatie, cardanimation);
    });
  } else if (crslContent[i].dataset.target === "4") {
    crslContent[i].addEventListener("mouseover", function () {
      crslContent[i].animate(cardAnimatie, cardanimation);
    });
  }
}

var numberOfUsers = 90;

// STARTING NUMBER
	  var counter_number = 0;
	  // HOW QUICKLY YOU COUNT IN MS
	  var counter_duration = 100;

		var myCounter = setInterval(myTimer, counter_duration);

		function myTimer() {
		    counter_number++;
		    console.log("myTimer")
		    document.getElementById("counter_text").innerHTML = counter_number;
		    if(counter_number === numberOfUsers){
		    	return myStopFunction();
		    }
		}

		function myStopFunction() {
			console.log("MY STOP FUNCTIOn")
		    clearInterval(myCounter);
		}

function myStopFunction() {
  console.log("MY STOP FUNCTIOn");
  clearInterval(myCounter);
}

var numberOfUsers2 = 50;

// STARTING NUMBER
var counter_number2 = 0;
// HOW QUICKLY YOU COUNT IN MS
var counter_durationn = 100;

var myCounterrr = setInterval(myTimerr, counter_durationn);

function myTimerr() {
  counter_number2++;
  document.getElementById("counter_textt").innerHTML = counter_number2;
  if (counter_number2 === numberOfUsers2) {
    return myStopFunction();
  }
}

function myStopFunction() {
  console.log("MY STOP FUNCTIOn");
  clearInterval(myCounterrr);
}

var numberOfUsers3 = 60;

// STARTING NUMBER
var counter_number3 = 0;
// HOW QUICKLY YOU COUNT IN MS
var counter_durationn = 2;

var myCounterr = setInterval(myTimerrr, counter_duration);

// function myTimerrr() {
//   counter_number3++;
//   console.log("myTimer");
//   document.getElementById("counter_texttt").innerHTML = counter_number3;
//   if (counter_number3 === numberOfUsers3) {
//     return myStopFunction();
//   }
// }

function myStopFunction() {
  console.log("MY STOP FUNCTIOn");
  clearInterval(myCounterr);
}