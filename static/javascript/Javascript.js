
const documentButton = document.getElementsByClassName('BorderDoc');
const continueButton = document.getElementsByClassName('continue');
const goToEarlierWeek = document.getElementsByClassName('front')[0];
const goToLaterWeek = document.getElementsByClassName('back')[0];

let first = true; 
let theTarget;
let info;
let linkStatus;
let nameA;

function updateWeekToLaterWeek() {
  let infoString = documentButton[0].getAttribute("data-data");
  info = infoString.split(",");
  let currentWeek = info[2]; //håber det er week
  let incrementedWeek = parseInt(currentWeek) + 1;
  window.location.href = '/week/' + incrementedWeek; //send info to database
  console.log("clicked");
}

function updateWeekToEarlierWeek() {
  let infoString = documentButton[0].getAttribute("data-data");
  info = infoString.split(",");
  let currentWeek = info[2]; //håber det er week
  let decrementedWeek = parseInt(currentWeek) - 1;
  window.location.href = '/week/' + decrementedWeek; //send info to database
  console.log("clicked");
}

goToEarlierWeek.onclick = function () {
  updateWeekToEarlierWeek();
}

goToLaterWeek.onclick = function () {
  updateWeekToLaterWeek();
}

const statusMap = new Map();
for(i = 0; i<documentButton.length; i++){
  let infoString = documentButton[i].getAttribute("data-data");
  updateName(infoString); //updates the the name varible
  docCreatedStatus = info[6]; // duer ikke for afleveringer da de ikke har et document status row i db'en
  statusMap.set(nameA, docCreatedStatus);
  if(docCreatedStatus == "true"){
    updateClickedButtons(documentButton[i]);
  }
  console.log(nameA);
}

const newDocumentMap = new Map(); 
// link til EXSYS
newDocumentMap.set("EXSYSLecturesMonday", {created: statusMap.get("EXSYSLecturesMonday"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=13YIUL75PP8QtOcora9N4M1ChF3POeHCL', mappe: 'https://drive.google.com/drive/folders/13YIUL75PP8QtOcora9N4M1ChF3POeHCL?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk'});
newDocumentMap.set("EXSYSLecturesWednesday", {created: statusMap.get("EXSYSLecturesWednesday"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=13YIUL75PP8QtOcora9N4M1ChF3POeHCL', mappe: 'https://drive.google.com/drive/folders/13YIUL75PP8QtOcora9N4M1ChF3POeHCL?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk'});
newDocumentMap.set('EXSYStø', {created: statusMap.get("EXSYStø"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=15EmJs6oCn8cyWyWFVVwdnyhO2t21gkts', mappe: "https://drive.google.com/drive/folders/15EmJs6oCn8cyWyWFVVwdnyhO2t21gkts?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set('EXSYSLiterature', {created: statusMap.get("EXSYSLiterature"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1gUja6CYqUuDEt11-Jnk4o70hCxac7fSc', mappe: "https://drive.google.com/drive/folders/1gUja6CYqUuDEt11-Jnk4o70hCxac7fSc?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set('EXSYSAssignment', {created: statusMap.get("EXSYSAssignment"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1AdCZ1xzp6AoB07PEkBHRU1NwWAoXXnBJ", mappe: "https://drive.google.com/drive/folders/1AdCZ1xzp6AoB07PEkBHRU1NwWAoXXnBJ?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});

// links til COMARK
newDocumentMap.set("COMARKLecturesTuesday", {created: statusMap.get("COMARKLecturesTuesday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k", mappe: "https://drive.google.com/drive/folders/1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKLecturesThursday", {created: statusMap.get("COMARKLecturesThursday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k", mappe: "https://drive.google.com/drive/folders/1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKLiterature", {created: statusMap.get("COMARKLiterature"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1Fp5uMLFxcEMI6UzTQlgtBOP0vam5-jvk", mappe: "https://drive.google.com/drive/folders/1Fp5uMLFxcEMI6UzTQlgtBOP0vam5-jvk?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKtø", {created: statusMap.get("COMARKtø"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1ye6XUIeCWf3sUb23GaPSTjHZBavjavZG", mappe: "https://drive.google.com/drive/folders/1LmjXOWBjQ5Ck6gWq4L-zQsVfNUcyshjI?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("COMARKAssignment", {created: statusMap.get("COMARKAssignment"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1cKHRRkIzeqIbZKAKU7WeZ079Um7UeA2F", mappe: "https://drive.google.com/drive/folders/1cKHRRkIzeqIbZKAKU7WeZ079Um7UeA2F?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
// links til STAT
newDocumentMap.set("STATLecturesTuesday", {created: statusMap.get("STATLecturesTuesday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_", mappe: "https://drive.google.com/drive/folders/1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATLecturesFriday", {created: statusMap.get("STATLecturesFriday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_", mappe: "https://drive.google.com/drive/folders/1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATLiterature", {created: statusMap.get("STATLiterature"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=156QXc7eCQZ0Xhjl-IY2rf7wnowajNc4t", mappe: "https://drive.google.com/drive/folders/156QXc7eCQZ0Xhjl-IY2rf7wnowajNc4t?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATtø", {created: statusMap.get("STATtø"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1MlreAjMvM6LgX5qM2xVgIlV5BKlRcS_v", mappe: "https://drive.google.com/drive/folders/1MlreAjMvM6LgX5qM2xVgIlV5BKlRcS_v?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});
newDocumentMap.set("STATAssignment", {created: statusMap.get("STATAssignment"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1SlU2QKyvDkD0GkaU_4PhIujAwIBUE7wr", mappe: "https://drive.google.com/drive/folders/1SlU2QKyvDkD0GkaU_4PhIujAwIBUE7wr?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk"});


function copyToClipboard (str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function getDataFromClickedButton(event){
  theTarget = event.currentTarget;
  infoString = theTarget.getAttribute("data-data");
  updateLinkStatus(infoString);
}

function updateLinkStatus(infoString){
  info = infoString.split(",");
  updateName(infoString);
  linkStatus = newDocumentMap.get(nameA);
}

function updateName(infoString){
  info = infoString.split(",");
  if(info[1] == "Lectures"){
    nameA = info[0]+info[1]+info[4];
  }else{
    nameA = info[0]+info[1];
  }
}

// ADDING CLICK EVENTS TO BUTTONS
addClickEventToDocumentButton(); //document Button

function addClickEventToDocumentButton(){
  for (i = 0; i < documentButton.length; i++) {
    documentButton[i].onclick = function () {
      getDataFromClickedButton(event);
      console.log(linkStatus.created);
      if (linkStatus.created == "FALSE") {
        if(first){
          document.getElementsByClassName('docs-popup-info')[0].innerHTML 
          = "You are creating a shared google docs document in the folder:  studygroup/"+info[0]+"/"+info[1]+". <br> <br> This command also copies a recomended name for the document to your clipboard, for this document it's:    "+ createClipboardString(info[1]);
          protomodaldoc.style.display = 'block';
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
  updateClickedButtons(theTarget);
  copyToClipboard(createClipboardString(info[1]));
  window.open(linkStatus.new, '_blank').focus();
  linkStatus.created = "true";
  window.location.href='/db/'+info[5]; //send info to database
}

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

function updateClickedButtons(element){
  element.classList.add('clicked');
  element.childNodes[1].classList.add('documentbuttonClicked');
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


// when people clicks outside the modal it closes #1
modalbag = document.getElementsByClassName("modal");
for(i = 0; i<modalbag.length; i++){
  modalbag[i].onclick = function (event) {
    if(event.currentTarget == event.target){
 normmodal.style.display = "none";
    protomodal.style.display = "none";
    conmodal.style.display = "none";
    normmodal2.style.display = 'none';
    conmodal2.style.display = 'none';
    protomodal2.style.display = 'none';
    protomodaldoc.style.display = 'none';
    protomodalUpload.style.display = 'none';
    }
    }
}

/*
// When the user clicks anywhere outside of the modal, close it # 2 dosnt work i think
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
*/
// menu expand
let menuClosed = true;
const menubox = document.getElementsByClassName('menubox')[0];
const menuimg = document.getElementsByClassName('menuimg')[0];

document.getElementsByClassName('menu')[0].onclick = function () {
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
