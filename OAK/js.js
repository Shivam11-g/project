var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var slide2Index = 0;
Slides();
function Slides() {
  var i;
  var slides = document.getElementsByClassName("Slides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slide2Index++;
  if (slide2Index > slides.length) {slide2Index = 1}    
  
  slides[slide2Index-1].style.display = "block";  
  
  setTimeout(Slides, 3000); // Change image every 3 seconds
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//FOR BUTTONS (animated buttons)
function myFunction(x) {
  x.classList.toggle("change");
}

function linkanimi(){
 var a= document.getElementsByClassName("link");
 a.style.linkanimi();
}