//function toggleMenu(){
    //const menu = document.querySelector(".menu-links");
    //const icon = document.querySelector(".hamburger-icon");
    //menu.classList.toggle("open");
   // icon.classList.toggle("open");
//}

//const sr=ScrollReveal({
  //  distance:'60px',
 //   duration:2500,
 //   delay:400,
//    reset:true
//})


//плавный скролл

let anchors = document.querySelectorAll('.nav-links a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}

var copy=document.querySelector('.logos-slide').cloneNode(true);
document.querySelector(".logos").appendChild(copy)



//pre-loader
var preloader = document.getElementById('preloader')
setTimeout(function(){
    preloader.classList.add("cerrar")
    document.body.classList.remove('preloader-active')
},7000)

//печатающая машинака анимация
var typed =new Typed(".sec",{
    strings:["Frontend Developer", "UX/UI Designer", "Web Developer", "Photographer","Blogger"],
    typedSpeed:200,
    backSpeed:150,
    backDelay:1000,
    loop:true
})

const burger = document.querySelector(".hamburger");

burger.addEventListener("click", function(){
    burger.classList.toggle("open");
});

$(window).onscroll=function showHeader(){
  let header=document.querySelector('.header')

  if(windows.pageYOffset>200){
    header.classList.add('header__fixed');
  }else{
    header.classList.remove('header__fixed')
  }
}

const loadmore=document.querySelector('.load_more');
let currentItems=3;
loadmore.addEventListener('click', (e) =>{
  e.preventDefault();
  const elementList=[...document.querySelectorAll('.details_container')]
  e.target.classList.add('show-loader');

  for (let i=currentItems; i<currentItems+3; i++){
    setTimeout(function(){
      e.target.classList.remove('show-loader');
      if (elementList[i]){
        elementList[i].style.display='block'
      }

    })
  }
  currentItems+=3;

  if(currentItems>=elementList.length){
    e.target.classList.add('load');
  }
})
