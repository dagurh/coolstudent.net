// ved ikke helt hvordan man gør
const db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);

/* let result;
let text = "heey";
var xhr = new XMLHttpRequest();
xhr.open("GET", "data.py?text=" + text, true);
xhr.responseType = "JSON";
xhr.onload = function(e) {
  result = JSON.parse(xhr.response);
}
xhr.send();
*/

const newDocumentMap = new Map(); // hente stat fra database true/false
newDocumentMap.set('tø', true);
newDocumentMap.set('lecture', true);
newDocumentMap.set('literature', false);

const weekNumber = 18;
const headline = 'Situated Action';

function copyToClipboard (str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const documentButton = document.getElementsByClassName('BorderDoc');

for (i = 0; i < documentButton.length; i++) {
  documentButton[i].onclick = function () {
    if (newDocumentMap.get('tø')) {
      event.currentTarget.classList.add('clicked');
      event.currentTarget.childNodes[1].classList.add('documentbuttonClicked');
      copyToClipboard('Eksys TØ - Week ' + weekNumber + ' - ' + headline);
      window.open('https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=13YIUL75PP8QtOcora9N4M1ChF3POeHCL', '_blank').focus();
      newDocumentMap.set('tø', false);
    } else {
      window.open('https://drive.google.com/drive/folders/13YIUL75PP8QtOcora9N4M1ChF3POeHCL?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk', '_blank').focus();
    }
  };
}

const videoButton = document.getElementsByClassName('BorderVid');
for (i = 0; i < videoButton.length; i++) {
  videoButton[i].onclick = function () {
    window.open('https://aarhusuniversity.zoom.us/j/68510210704', '_blank').focus();
  };
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

/* exported addGroup */

function addGroup () {
  document.getElementById('myDropdown').classList.toggle('show');
}

function settings () {
  document.getElementById('myDropdown2').classList.toggle('show2');
}

function addChat () {
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
};
// Get the modal
const protomodal = document.getElementById('protomodal');
const conmodal = document.getElementById('conmodal');
const normmodal = document.getElementById('normmodal');

// Get the button that opens the modal
const protobtn = document.getElementById('protobutton');
const conbtn = document.getElementById('conbutton');
const normbtn = document.getElementById('normbutton');

// Get the <span> element that closes the modal
const protospan = document.getElementsByClassName('close')[0];
const conspan = document.getElementsByClassName('close')[1];
const normspan = document.getElementsByClassName('close')[2];

// When the user clicks the button, open the modal
protobtn.onclick = function () {
  protomodal.style.display = 'block';
};
conbtn.onclick = function () {
  conmodal.style.display = 'block';
};
normbtn.onclick = function () {
  normmodal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
protospan.onclick = function () {
  protomodal.style.display = 'none';
};
conspan.onclick = function () {
  conmodal.style.display = 'none';
};
normspan.onclick = function () {
  normmodal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == protomodal) {
    protomodal.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target == conmodal) {
    conmodal.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target == normmodal) {
    normmodal.style.display = 'none';
  }
};

// menu expand
let menuClosed = true;
const menubox = document.getElementsByClassName('menubox')[0];
const menuimg = document.getElementsByClassName('menuimg')[0];

document.getElementsByClassName('menu')[0].onclick = function () {
  console.log('HEEEY');
  if (menuClosed) {
    menubox.classList.add('menuexpand');
    menuimg.classList.add('menuimgexpand');
    menuClosed = false;
  } else {
    menubox.classList.remove('menuexpand');
    menuimg.classList.remove('menuimgexpand');
    menuClosed = true;
  }
};
