// Mobile Menu
let nav = document.querySelector("nav"); 
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");

// Scroll Fixed
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
      logoOne.classList.add("active");
      menuBtn.classList.add("active");
    }else{
      nav.classList.remove("sticky");
      logoOne.classList.remove("active");
      menuBtn.classList.remove("active");
    }
  
  // counter on scroll 
  var number = 0;
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (number == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
  
        {
  
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum); 
          }
  
        });
    });
  }
  
  
  
}
setInterval(()=>{
  const time = document.querySelector(".display #time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
});
    
     
