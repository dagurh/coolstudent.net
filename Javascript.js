/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

/* exported addGroup */

function addGroup() {
  document.getElementById('myDropdown').classList.toggle('show');
}

function settings() {
  document.getElementById('myDropdown2').classList.toggle('show2');
}

function addChat() {
  document.getElementById('myDropdown3').classList.toggle('show3');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.button1')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.button6')) {
    const dropdowns2 = document.getElementsByClassName('dropdown-content2');
    let j;
    for (j = 0; j < dropdowns2.length; j++) {
      const openDropdown2 = dropdowns2[j];
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show2');
      }
    }
  }
  if (!event.target.matches('.ChatButton')) {
    const droplefts = document.getElementsByClassName('dropdown-content3');
    let k;
    for (k = 0; k < droplefts.length; k++) {
      const openDropleft = droplefts[k];
      if (openDropleft.classList.contains('show3')) {
        openDropleft.classList.remove('show3');
      }
    }
  }
}
// Get the modal
var protomodal = document.getElementById("protomodal");
var conmodal = document.getElementById("conmodal");
var normmodal = document.getElementById("normmodal");

// Get the button that opens the modal
var protobtn = document.getElementById("protobutton");
var conbtn = document.getElementById("conbutton");
var normbtn = document.getElementById("normbutton");

// Get the <span> element that closes the modal
var protospan = document.getElementsByClassName("close")[0];
var conspan = document.getElementsByClassName("close")[1];
var normspan = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
protobtn.onclick = function () {
  protomodal.style.display = "block";
}
conbtn.onclick = function () {
  conmodal.style.display = "block";
}
normbtn.onclick = function () {
  normmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
protospan.onclick = function () {
  protomodal.style.display = "none";
}
conspan.onclick = function () {
  conmodal.style.display = "none";
}
normspan.onclick = function () {
  normmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == protomodal) {
    protomodal.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == conmodal) {
    conmodal.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == normmodal) {
    normmodal.style.display = "none";
  }
}