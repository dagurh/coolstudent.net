/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

/* exported addGroup */

function addGroup () {
  document.getElementById('myDropdown').classList.toggle('show')
}

function settings () {
  document.getElementById('myDropdown2').classList.toggle('show2')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.button1')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
  if (!event.target.matches('.button6')) {
    var dropdowns2 = document.getElementsByClassName('dropdown-content2')
    var j
    for (j = 0; j < dropdowns.length; j++) {
      var openDropdown2 = dropdowns2[j]
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show2')
      }
    }
  }
}
