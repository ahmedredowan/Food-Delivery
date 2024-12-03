/*----------Toggle Menu----------*/
$(".nav-toggle").click(function(){
    $(".nav-menu").toggleClass("show");
})


/*----------Toggle Cart----------*/
// $(".cart-toggle").click(function(){
//     $(".cart-section").toggleClass("cart-show");
// })






/*---------Home Parallax Image------*/
document.querySelector('.home').onmousemove = e =>{
    let x = (window.innerWidth - e.pageX*2) /90;
    let y = (window.innerHeight - e.pageY*2) /90;

    document.querySelector('.home .home-para-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}
document.querySelector('.home').onmouseleave = () =>{
    document.querySelector('.home .home-para-img').style.transform = `translateX(0px) translateY(0px)`;
}


/*----------Category----Owl Carousel------------*/
$('#owl-demo').owlCarousel({         
    loop:true,
    //autoplay:true,
    autoplayTimeout:5000,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        560:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1300:{
            items:6
        }
    }
    
})


/*----------Popular------isotop------*/
$(window).on("load", function () {
    var portfolio_all_items = $(".food-all-items").isotope({});
    $(".nav-items li").on("click", function () {
        $(".nav-items li").removeClass("food-filter-active");
        $(this).addClass("food-filter-active");

        portfolio_all_items.isotope({
        filter: $(this).data("filter"),
        });
    });

    });
    AOS.init();

 

/*----------Active Link Navigation Menu---------*/
const sections = document.querySelectorAll('section[id]');
function activeScroll(){
   const scrollY = window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.mynav a[href*=' + sectionId + ']').classList.add('active-menu');
        }
        else{
            document.querySelector('.mynav a[href*=' + sectionId + ']').classList.remove('active-menu');
        }
    })

}
window.addEventListener('scroll',activeScroll);
