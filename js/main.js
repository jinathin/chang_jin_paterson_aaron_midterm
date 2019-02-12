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

// The subscriptionPopup() function handles open and close
// functionality of the subscription popup. It helps to show and hide the popup content to the user.
function subscriptionPopup(){
    // get the mPopup
    var mpopup = $('#mpopupBox');
    
    // open the mPopup
    mpopup.show();
    
    // close the mPopup once close element is clicked
    $(".close").on('click',function(){
        mpopup.hide();
    });
    
    // close the mPopup when user clicks outside of the box
    $(window).on('click', function(e) {
        if(e.target == mpopup[0]){
            mpopup.hide();
        }
    });
}

//  the countdown variable after 10 seconds, if the user has not seen the popup
$(document).ready(function() {
    var popDisplayed = $.cookie('popDisplayed');
    if(popDisplayed == '1'){
        return false;
    }else{
        setTimeout( function() {
            subscriptionPopup();
        },10000);
        $.cookie('popDisplayed', '1', { expires: 7 });
    }
});