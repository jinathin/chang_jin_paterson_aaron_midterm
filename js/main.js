// This is the intro to javascript. 
// To create go to 'View' > 'Javascript'  and save the file to the folder.


// create a variable with a string call it a 'name.'
// Below is a example of Concatination
//var firstName = "Aaron";
// alert("Hello" + firstName);

// Modern Js
// alert(`Hello ${firstName}`);

//console.log("Hello " + firstName);

console.log("javascript linked up");


// this is the function of the Javascript for click button to reveal image
// also mind that its calling the div 
function myFunction() {
  var e = document.getElementById("chartimg");
   if(e.style.display == 'block') {
        e.style.display = 'none';
   } else {
       e.style.display = 'block';
   }
}
