window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
   document.getElementById("delivery").onclick = turnOnDelivery;
   document.getElementById("pickup").onclick = turnOnPickup;
}

function turnOnDelivery() {
   document.getElementById("homeAddress").disabled=false;
   document.getElementById("delTime").disabled=false;
   document.getElementById("pickupTime").disabled=true;
}

function turnOnPickup() {
   document.getElementById("homeAddress").disabled=true;
   document.getElementById("delTime").disabled=true;
   document.getElementById("pickupTime").disabled=false;
}

function submitorder() {
   alert("Your order has submitted!");
   window.location.href = '../Payment/mp_payment.html';
}