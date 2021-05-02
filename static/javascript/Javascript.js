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

// use this to fill out info in map
const getinfo = document.getElementsByClassName("BorderDoc");
for(i = 0; i<getinfo.length; i++){
  console.log(getinfo[i].getAttribute("data-data"));
}

const newDocumentMap = new Map(); 
// link til EXSYS
newDocumentMap.set("EXSYSLecturesMonday", {created: "false", new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=13YIUL75PP8QtOcora9N4M1ChF3POeHCL', mappe: 'https://drive.google.com/drive/folders/13YIUL75PP8QtOcora9N4M1ChF3POeHCL?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk'});
newDocumentMap.set("EXSYSLecturesWednesday", {created: "false", new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=13YIUL75PP8QtOcora9N4M1ChF3POeHCL', mappe: 'https://drive.google.com/drive/folders/13YIUL75PP8QtOcora9N4M1ChF3POeHCL?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk'});
newDocumentMap.set('EXSYStø', {created: "false", new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=15EmJs6oCn8cyWyWFVVwdnyhO2t21gkts', mappe: "https://drive.google.com/drive/folders/15EmJs6oCn8cyWyWFVVwdnyhO2t21gkts?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set('EXSYSLiterature', {created: "false", new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1gUja6CYqUuDEt11-Jnk4o70hCxac7fSc', mappe: "https://drive.google.com/drive/folders/1gUja6CYqUuDEt11-Jnk4o70hCxac7fSc?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set('EXSYSAssignment', {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1AdCZ1xzp6AoB07PEkBHRU1NwWAoXXnBJ", mappe: "https://drive.google.com/drive/folders/1AdCZ1xzp6AoB07PEkBHRU1NwWAoXXnBJ?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});

// links til COMARK
newDocumentMap.set("COMARKLecturesTuesday", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k", mappe: "https://drive.google.com/drive/folders/1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKLecturesThursday", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k", mappe: "https://drive.google.com/drive/folders/1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKLiterature", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1Fp5uMLFxcEMI6UzTQlgtBOP0vam5-jvk", mappe: "https://drive.google.com/drive/folders/1Fp5uMLFxcEMI6UzTQlgtBOP0vam5-jvk?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKtø", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1ye6XUIeCWf3sUb23GaPSTjHZBavjavZG", mappe: "https://drive.google.com/drive/folders/1LmjXOWBjQ5Ck6gWq4L-zQsVfNUcyshjI?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKAssignment", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1cKHRRkIzeqIbZKAKU7WeZ079Um7UeA2F", mappe: "https://drive.google.com/drive/folders/1cKHRRkIzeqIbZKAKU7WeZ079Um7UeA2F?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
// links til STAT
newDocumentMap.set("STATLecturesTuesday", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_", mappe: "https://drive.google.com/drive/folders/1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATLecturesFriday", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_", mappe: "https://drive.google.com/drive/folders/1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATLiterature", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=156QXc7eCQZ0Xhjl-IY2rf7wnowajNc4t", mappe: "https://drive.google.com/drive/folders/156QXc7eCQZ0Xhjl-IY2rf7wnowajNc4t?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATtø", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1MlreAjMvM6LgX5qM2xVgIlV5BKlRcS_v", mappe: "https://drive.google.com/drive/folders/1MlreAjMvM6LgX5qM2xVgIlV5BKlRcS_v?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATAssignment", {created: "false", new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1SlU2QKyvDkD0GkaU_4PhIujAwIBUE7wr", mappe: "https://drive.google.com/drive/folders/1SlU2QKyvDkD0GkaU_4PhIujAwIBUE7wr?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});


function copyToClipboard (str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const documentButton = document.getElementsByClassName('BorderDoc');
const continueButton = document.getElementsByClassName('continue');
let first = true; 
let theTarget;
let info;
let linkStatus;

function getDataFromHtml(event){
  theTarget = event.currentTarget;
  infoString = theTarget.getAttribute("data-data");
  info = infoString.split(",");
  console.log(info[1]);
  if(info[1] == "Lectures"){
    linkStatus = newDocumentMap.get(info[0]+info[1]+info[4]);
    console.log(linkStatus);
  }else{
    linkStatus = newDocumentMap.get(info[0]+info[1]);
    console.log(linkStatus);
  }
}

// ADDING CLICK EVENTS TO BUTTONS

addClickEventToDocumentButton(); //document Button

// video Button
const videoButton = document.getElementsByClassName('BorderVid');
for (i = 0; i < videoButton.length; i++) {
  videoButton[i].onclick = function () {
    window.open('https://aarhusuniversity.zoom.us/j/68510210704', '_blank').focus();
  };
}
// Document popup-Button
continueButton[0].onclick = function (){
  addocument();
  protomodaldoc.style.display = 'none';
}


function addClickEventToDocumentButton(){
  for (i = 0; i < documentButton.length; i++) {
    documentButton[i].onclick = function () {
      getDataFromHtml(event);
      if (linkStatus.created == "false") {
        if(first){
          document.getElementsByClassName('docs-popup-info')[0].innerHTML 
          = "You are creating a shared google docs document in the folder:  studygroup/"+info[0]+"/"+info[1]+". <br> <br> This command also copies a recomended name for the document to your clipboard, for this document it's:    "+ createClipboardString(info[1]);
          protomodaldoc.style.display = 'block';
          first = false;
        }else{
          addocument();
        }
      } else {
        window.open(linkStatus.mappe, '_blank').focus();
      }
    };
  }
}

function addocument(){
  theTarget.classList.add('clicked');
  theTarget.childNodes[1].classList.add('documentbuttonClicked');
  copyToClipboard(createClipboardString(info[1]));
  window.open(linkStatus.new, '_blank').focus();
  linkStatus.created = "true";
}

function createClipboardString(kind){
  let string;
  if(kind == "Assignment"){
    string = info[0] +" - "+info[2];
  }else{
    string = info[0] +" "+info[1]+" - Week "+info[2]+' - ' + info[3];
  }
  return string;
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
const protomodalUpload = document.getElementById('protomodal--upload');
const protomodaldoc = document.getElementById('protomodal--doc');
const protomodal = document.getElementById('protomodal--1');
const protomodal2 = document.getElementById('protomodal--2');
const conmodal = document.getElementById('conmodal--3');
const conmodal2 = document.getElementById('conmodal--4');
const normmodal = document.getElementById('normmodal--5');
const normmodal2 = document.getElementById('normmodal--6');

// Get the button that opens the modal
const protobtn = document.getElementById('protobutton--1');
const protobtn2 = document.getElementById('protobutton--2');
const conbtn = document.getElementById('conbutton--3');
const conbtn2 = document.getElementById('conbutton--4');
const normbtn = document.getElementById('normbutton--5');
const normbtn2 = document.getElementById('normbutton--6');

// Get the <span> element that closes the modal
const protospanUpload = document.getElementById('protoclose--upload');
const protospandoc = document.getElementById('protoclose');
const protospan = document.getElementById('protoclose--1');
const protospan2 = document.getElementById('protoclose--2');
const conspan = document.getElementById('conclose--3');
const conspan2 = document.getElementById('conclose--4');
const normspan = document.getElementById('normclose--5');
const normspan2 = document.getElementById('normclose--6');

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
protobtn2.onclick = function () {
  protomodal2.style.display = 'block';
};
conbtn2.onclick = function () {
  conmodal2.style.display = 'block';
};
normbtn2.onclick = function () {
  normmodal2.style.display = 'block';
};
//upload button
const uploadButton = document.getElementsByClassName('BorderUp');
let targetUploadButton;
for(i = 0; i<uploadButton.length; i++){
  uploadButton[i].onclick = function () {
    protomodalUpload.style.display = 'block';
    targetUploadButton = event.currentTarget;
  };
}

function getFile(){
  document.getElementById("upfile").click();
}
function sub(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
  //document.myForm.submit();
  event.preventDefault();
}

// when clicking send
document.getElementsByClassName('send')[0].onclick = function () {
  console.log("hey ggg");
  targetUploadButton.classList.add('uploadclicked');
  targetUploadButton.childNodes[1].classList.add('uploadclickedicon');
  protomodalUpload.style.display = 'none';
};


// When the user clicks on <span> (x), close the modal
protospanUpload.onclick = function () {
  protomodalUpload.style.display = 'none';
};
protospandoc.onclick = function () {
  protomodaldoc.style.display = 'none';
};
protospan.onclick = function () {
  protomodal.style.display = 'none';
};
conspan.onclick = function () {
  conmodal.style.display = 'none';
};
normspan.onclick = function () {
  normmodal.style.display = "none";
}

protospan2.onclick = function () {
  protomodal2.style.display = 'none';
};
conspan2.onclick = function () {
  conmodal2.style.display = 'none';
};
normspan2.onclick = function () {
  normmodal2.style.display = 'none';
};

modalbag = document.getElementsByClassName("modal");
for(i = 0; i<modalbag.length; i++){
  modalbag[i].onclick = function (event) {
    if(event.currentTarget == event.target)
    normmodal.style.display = "none";
    protomodal.style.display = "none";
    conmodal.style.display = "none";
    //dont work yet
    normmodal2.style.display = 'none';
    conmodal2.style.display = 'none';
    protomodal2.style.display = 'none';
    console.log("heeey");
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === protomodal) {
    protomodal.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === conmodal) {
    conmodal.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === normmodal) {
    normmodal.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === protomodal2) {
    protomodal2.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === conmodal2) {
    conmodal2.style.display = 'none';
  }
};
window.onclick = function (event) {
  if (event.target === normmodal2) {
    normmodal2.style.display = 'none';
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
