let marker = document.querySelector('#marker');
let marker2 = document.querySelector('#markersocial');
let menu = document.querySelectorAll('.nav-menu li');
let social = document.querySelectorAll('.social-links li');

function markerPosition(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

function markerPositionSocial(e) {
  marker2.style.left = e.offsetLeft + 'px';
  marker2.style.width = e.offsetWidth + 'px';
}

menu.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    markerPosition(e.target);
  });
})

social.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    markerPositionSocial(e.target);
  });
})

// Add active class to menu

function activeLink() {
  menu.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
function inactiveLink() {
  menu.forEach((item) =>
    item.classList.remove('active'));
}

menu.forEach((item) =>
  item.addEventListener('mouseover', activeLink));

menu.forEach((item) =>
  item.addEventListener('mouseout', inactiveLink));


// Add active class to social

function activeLinkSocial() {
  social.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
function inactiveLinkSocial() {
  social.forEach((item) =>
    item.classList.remove('active'));
}

social.forEach((item) =>
  item.addEventListener('mouseover', activeLinkSocial));

social.forEach((item) =>
  item.addEventListener('mouseout', inactiveLinkSocial));