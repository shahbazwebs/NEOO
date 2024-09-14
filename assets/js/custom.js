AOS.init();
// Header fixed JS
$(window).scroll(function(){
  if ($(window).scrollTop() >= 330) {
    $('.HeaderWrapper').addClass('HeaderFixed');
   }
   else {
    $('.HeaderWrapper').removeClass('HeaderFixed');
   }
});

//Get the button:
mybutton = document.getElementById("BottomTotopButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(".navbar-collapse li a").click(function (){
    $("#togglerButtons").click();
});