const hamburger = document.querySelector('.header-container .navBar .navList .hamburger');
const mobile_menu = document.querySelector('.header-container .navBar .navList ul');
const menu_item = document.querySelectorAll('.header-container .navBar .navList ul li a');
const header = document.querySelector('.header-container');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 150){
        header.style.backgroundColor='#29323c';
        header.style.backgroundImage = 'linear-gradient(60deg, #000000 60%, #040f29 100%)';
        
     }  else{
        header.style.backgroundColor='transparent';
        header.style.backgroundImage='none';

        }

});

menu_item.forEach(item=>{
    item. addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});
document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    // navbar_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
}); 

var portfolioIsotope = $('.portfolio-container').isotope({itemSelector: '.portfolio-item', layoutMode: 'fitRows'});
    $('#portfolio-flters li').on('click', function (){
        $("#portfolio-flters li").removeClass('active').removeClass('filter-active');
        $(this).addClass('active').addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
  