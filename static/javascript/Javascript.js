
const documentButton = document.getElementsByClassName('BorderDoc');
const continueButton = document.getElementsByClassName('continue');
const goToEarlierWeek = document.getElementsByClassName('back')[0];
const goToLaterWeek = document.getElementsByClassName('front')[0];

let theTarget;
let info;
let linkStatus;
let nameA;



clickOffButton = document.getElementById("clickOffButton");
clickOffTEXT = document.getElementById("clickOffTEXT");

function turnOffPopUp(){
    clickOffButton.style.backgroundColor = "#A7D9B1";
    clickOffTEXT.innerHTML = "Cool!"
    getDataFromClickedButton(documentButton[0]);
    window.location.href = '/popUp/' + info[2]; //send info to database
}

function updateWeekToLaterWeek() {
  let infoString = documentButton[0].getAttribute("data-data");
  info = infoString.split(",");
  let currentWeek = info[2]; //håber det er week
  if(currentWeek != "19"){
    let incrementedWeek = parseInt(currentWeek) + 1;
    window.location.href = '/week/' + incrementedWeek; //send info to database
  }
}

function updateWeekToEarlierWeek() {
  
  let infoString = documentButton[0].getAttribute("data-data");
  info = infoString.split(",");
  let currentWeek = info[2]; //håber det er week
  if(currentWeek != "17"){
    let decrementedWeek = parseInt(currentWeek) - 1;
    window.location.href = '/week/' + decrementedWeek; //send info to database
  }
}

goToEarlierWeek.onclick = function () {
  updateWeekToEarlierWeek();
}

goToLaterWeek.onclick = function () {
  updateWeekToLaterWeek();
}

const statusMap = new Map();
for (i = 0; i < documentButton.length; i++) {
  // update the document button status
  let infoString = documentButton[i].getAttribute("data-data");
  updateName(infoString); //updates the the name varible
  docCreatedStatus = info[6];
  statusMap.set(nameA, docCreatedStatus);
  if (docCreatedStatus == "true") {
    updateClickedButtons(documentButton[i]);
  }
}


const newDocumentMap = new Map();
// link til EXSYS
newDocumentMap.set("EXSYSLecturesMonday", { created: statusMap.get("EXSYSLecturesMonday"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=13YIUL75PP8QtOcora9N4M1ChF3POeHCL', mappe: 'https://drive.google.com/drive/folders/13YIUL75PP8QtOcora9N4M1ChF3POeHCL?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk' });
newDocumentMap.set("EXSYSLecturesWednesday", { created: statusMap.get("EXSYSLecturesWednesday"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=13YIUL75PP8QtOcora9N4M1ChF3POeHCL', mappe: 'https://drive.google.com/drive/folders/13YIUL75PP8QtOcora9N4M1ChF3POeHCL?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk' });
newDocumentMap.set('EXSYSExercises', { created: statusMap.get("EXSYSExercises"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=15EmJs6oCn8cyWyWFVVwdnyhO2t21gkts', mappe: "https://drive.google.com/drive/folders/15EmJs6oCn8cyWyWFVVwdnyhO2t21gkts?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set('EXSYSLiterature', { created: statusMap.get("EXSYSLiterature"), new: 'https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1gUja6CYqUuDEt11-Jnk4o70hCxac7fSc', mappe: "https://drive.google.com/drive/folders/1gUja6CYqUuDEt11-Jnk4o70hCxac7fSc?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set('EXSYSAssignment', { created: statusMap.get("EXSYSAssignment"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1AdCZ1xzp6AoB07PEkBHRU1NwWAoXXnBJ", mappe: "https://drive.google.com/drive/folders/1AdCZ1xzp6AoB07PEkBHRU1NwWAoXXnBJ?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });

// links til COMARK
newDocumentMap.set("COMARKLecturesTuesday", { created: statusMap.get("COMARKLecturesTuesday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k", mappe: "https://drive.google.com/drive/folders/1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("COMARKLecturesThursday", { created: statusMap.get("COMARKLecturesThursday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k", mappe: "https://drive.google.com/drive/folders/1D9lpavkVkqKOdzLfyYkO8GTjWfZVFb-k?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("COMARKLiterature", { created: statusMap.get("COMARKLiterature"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1Fp5uMLFxcEMI6UzTQlgtBOP0vam5-jvk", mappe: "https://drive.google.com/drive/folders/1Fp5uMLFxcEMI6UzTQlgtBOP0vam5-jvk?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("COMARKExercises", { created: statusMap.get("COMARKExercises"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1ye6XUIeCWf3sUb23GaPSTjHZBavjavZG", mappe: "https://drive.google.com/drive/folders/1ye6XUIeCWf3sUb23GaPSTjHZBavjavZG?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("COMARKAssignment", { created: statusMap.get("COMARKAssignment"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1cKHRRkIzeqIbZKAKU7WeZ079Um7UeA2F", mappe: "https://drive.google.com/drive/folders/1cKHRRkIzeqIbZKAKU7WeZ079Um7UeA2F?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
// links til STAT
newDocumentMap.set("STATLecturesThursday", { created: statusMap.get("STATLecturesThursday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_", mappe: "https://drive.google.com/drive/folders/1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("STATLecturesFriday", { created: statusMap.get("STATLecturesFriday"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_", mappe: "https://drive.google.com/drive/folders/1VpDgm2BQ8o_67gHIHbLxpmbeh37NlF8_?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("STATLiterature", { created: statusMap.get("STATLiterature"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=156QXc7eCQZ0Xhjl-IY2rf7wnowajNc4t", mappe: "https://drive.google.com/drive/folders/156QXc7eCQZ0Xhjl-IY2rf7wnowajNc4t?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("STATExercises", { created: statusMap.get("STATExercises"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1MlreAjMvM6LgX5qM2xVgIlV5BKlRcS_v", mappe: "https://drive.google.com/drive/folders/1MlreAjMvM6LgX5qM2xVgIlV5BKlRcS_v?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });
newDocumentMap.set("STATAssignment", { created: statusMap.get("STATAssignment"), new: "https://docs.google.com/document/create?usp=drive_web&ouid=101355925897086537378&folder=1SlU2QKyvDkD0GkaU_4PhIujAwIBUE7wr", mappe: "https://drive.google.com/drive/folders/1SlU2QKyvDkD0GkaU_4PhIujAwIBUE7wr?fbclid=IwAR3l7kP-8EfsrdLluJ4g2E5qmTk6ahig1DZCLBmitU3wQ1MNLhqy3JJAJpk" });


function copyToClipboard() {
  str = createClipboardString(info[1])
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function getDataFromClickedButton(event) {
  infoString = event.getAttribute("data-data");
  updateLinkStatus(infoString);
  theTarget = event;
}

function updateLinkStatus(infoString) {
  info = infoString.split(",");
  updateName(infoString);
  linkStatus = newDocumentMap.get(nameA);
  console.log(info[7]);
}

function updateName(infoString) {
  info = infoString.split(",");
  if (info[1] == "Lectures") {
    nameA = info[0] + info[1] + info[4];
  } else {
    nameA = info[0] + info[1];
  }
}

const input = document.getElementById('RecomendedTitle');

function selectText() {
  input.focus();
  input.select();
}

// ADDING CLICK EVENTS TO BUTTONS
addClickEventToDocumentButton(); //document Button
const protomodaldoc = document.getElementById("protomodal--doc");

function addClickEventToDocumentButton() {
  for (i = 0; i < documentButton.length; i++) {
    documentButton[i].onclick = function () {
      getDataFromClickedButton(event.currentTarget);
      if (linkStatus.created == "FALSE") {
        if (info[7] != "popUp-Off") {
          document.getElementsByClassName('folders')[0].innerHTML = "studygroup/" + info[0] + "/" + info[1] + "/";        
          input.setAttribute("value", createClipboardString(info[1]));
          protomodaldoc.style.display = 'block';
          selectText();
        } else {
          addocument();
        }
      } else {
        window.open(linkStatus.mappe, '_blank').focus();
      }
    };
  }
}

function addocument() {
  updateClickedButtons(theTarget);
  ///copyToClipboard(createClipboardString(info[1]));
  window.open(linkStatus.new, '_blank').focus();
  linkStatus.created = "true";
  window.location.href = '/db/' + info[5]; //send info to database
}

// video Button
const videoButton = document.getElementsByClassName('BorderVid');
for (i = 0; i < videoButton.length; i++) {
  videoButton[i].onclick = function () {
    window.open('https://aarhusuniversity.zoom.us/j/68510210704', '_blank').focus();
  };
}
// Document popup-Button
continueButton[0].onclick = function () {
  addocument();
  protomodaldoc.style.display = 'none';
}

function updateClickedButtons(element) {
  element.classList.add('clicked');
  element.childNodes[1].classList.add('documentbuttonClicked');
}

function createClipboardString(kind) {
  let string;
  if (kind == "Assignment") {
    string = info[0] + " - " + info[2];
  } else {
    string = info[0] + " " + info[1] + " - Week " + info[2] + ' - ' + info[3];
  }
  return string;
}


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
};

// Get the <span> element that closes the modal

const closeButtons = document.getElementsByClassName("closebox");

// When the user clicks on <span> (x), close the modal
for (i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    console.log("CLICKED" + i);
    event.currentTarget.parentElement.parentElement.style.display = "none";
  }
}
// close button for docs-pop-up og upload-pop-up
docPopUp = document.getElementById("protomodal--upload");
uploadPopUp = document.getElementById("protomodal--doc");

function closePopUp(){
  docPopUp.style.display ="none";
  uploadPopUp.style.display ="none";
}


// When the user clicks the button, open the modal
const modals = document.getElementsByClassName("modal");
const topinfoButton = document.getElementsByClassName("topinfo");

for (i = 0; i < topinfoButton.length; i++) {
  topinfoButton[i].onclick = function () {
    modalID = parseInt(event.currentTarget.getAttribute("id"));
    document.getElementById('modal--' + modalID).style.display = "block";
  }
}

//ad or remove recourses
const resources = document.getElementsByClassName("files");

for(i =0; i< resources.length; i++){
  if(resources[i].childNodes[3].childNodes[3].innerHTML == ""){
    resources[i].style.display = "none";
    if(resources[i].getAttribute("data-activety") == "Lecture"){
      resources[i+1].style.top ="19%";
      resources[i+2].style.top = "33.5%";
    }
  }
}

//upload button
const protomodalUpload = document.getElementById("protomodal--upload");
const uploadButton = document.getElementsByClassName('BorderUp');
let targetUploadButton;

for (i = 0; i < uploadButton.length; i++) {
  // ADD CLICK event to button
  uploadButton[i].onclick = function () {
    protomodalUpload.style.display = 'block';
    targetUploadButton = event.currentTarget;
    getDataFromClickedButton(targetUploadButton);
  };

    // update the button status
    infoString = uploadButton[i].getAttribute("data-data");
    info = infoString.split(",");

      if(info[3]== "true"){
        uploadButton[i].classList.add('uploadclicked');
        uploadButton[i].childNodes[1].classList.add('uploadclickedicon');
      }
}
// file upload
function getFile() {
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
  uploadButtonClicked();
};

function uploadButtonClicked(){
  targetUploadButton.classList.add('uploadclicked');
  targetUploadButton.childNodes[1].classList.add('uploadclickedicon');
  protomodalUpload.style.display = 'none';
  window.location.href = '/uploadDone/' + info[5]; //send info to database
}

// when people clicks outside the modal it closes #1
modalbag = document.getElementsByClassName("modal");
for (i = 0; i < modalbag.length; i++) {
  modalbag[i].onclick = function (event) {
    if (event.currentTarget == event.target) {
      event.currentTarget.style.display = "none";
    }
  }
}

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

function openChat() {
  document.getElementById("myChat").style.display = "block";
}

function closeChat() {
  document.getElementById("myChat").style.display = "none";
}
