// Your code goes here
//---logo---//
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mousedown', function(element) {
  logo.style.color = 'red';
  logo.style.transform = 'translateX(10px)';
  logo.style.borderBottom = '1px solid blue';
});
logo.addEventListener('mouseup', function(element) {
  logo.style.color = 'black';
  logo.style.transform = 'translateX(0)';
  logo.style.borderBottom = 'none';
});

//--menu--//
const menu = document.querySelectorAll('.nav-link');
menu.forEach(function(element) {
  element.addEventListener('mouseover', function(e) {
    element.style.fontSize = '2.3rem';
  });
  element.addEventListener('mouseleave', function(e) {
    element.style.fontSize = '1.6rem';
  });
});

//----Button----//
let button = document.querySelectorAll('.btn');
button.forEach(function(element) {
  element.addEventListener('mouseover', function(e) {
    element.style.background = 'red';
    element.style.color = 'black';
  });
  element.addEventListener('mouseleave', function(e) {
    element.style.background = '#17A2B8';
  });
});
//---Images---//
let img = document.querySelector('img');
img.addEventListener('mouseup', function(element) {
  img.style.transform = 'scale(1.2)';
});
img.addEventListener('mousemove', function(element) {
  img.style.transform = 'scale(1)';
});

//---h2---//

let secondaryHeading = document.querySelectorAll('h2');
secondaryHeading.forEach(function(element) {
  element.addEventListener('mouseover', function(e) {
    element.style.background = 'red';
    element.addEventListener('mouseleave', function(e) {
      element.style.background = 'white';
    });
  });
});

//--p---//
let para = document.querySelectorAll('p');

//secondaryHeading.addEventListener('mouseover', function() {});
