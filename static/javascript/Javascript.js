
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
  infoString = event.currentTarget.getAttribute("data-data");
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

// Get the <span> element that closes the modal

const closeButtons = document.getElementsByClassName("closebox");

// When the user clicks on <span> (x), close the modal
for(i = 0; i<closeButtons.length; i++){
  closeButtons[i].onclick = function () {
    console.log("CLICKED" + i);
    event.currentTarget.parentElement.parentElement.style.display = "none";
}
}

// When the user clicks the button, open the modal
const modals = document.getElementsByClassName("modal");
const topinfoButton = document.getElementsByClassName("topinfo");

for(i = 0; i<topinfoButton.length; i++){
  topinfoButton[i].onclick = function () {
    modalID = parseInt(event.currentTarget.getAttribute("id"));
    console.log(modalID);
    document.getElementById('modal--'+modalID).style.display = "block";
}
}


//upload button
const protomodalUpload = document.getElementById("protomodal--upload");
const uploadButton = document.getElementsByClassName('BorderUp');
let targetUploadButton;

for(i = 0; i<uploadButton.length; i++){
  uploadButton[i].onclick = function () {
    protomodalUpload.style.display = 'block';
    targetUploadButton = event.currentTarget;
  };
}
// file upload
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

// when people clicks outside the modal it closes #1
modalbag = document.getElementsByClassName("modal");
for(i = 0; i<modalbag.length; i++){
  modalbag[i].onclick = function (event) {
    if(event.currentTarget == event.target){
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