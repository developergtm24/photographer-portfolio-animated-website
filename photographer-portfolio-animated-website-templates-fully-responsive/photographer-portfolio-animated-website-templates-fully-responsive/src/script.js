

// js power

let most_popular_gigs_left = document.querySelector('.most-popular-gigs .article-container .next-pre-btns .fa-angle-left');

let most_popular_gigs_right = document.querySelector('.most-popular-gigs .article-container .next-pre-btns .fa-angle-right');

let most_popular_gigs_cards = document.querySelector('.most-popular-gigs .article-container .container');


let opinion_left = document.querySelector('.opinion .main-container .next-pre-btns .fa-angle-left');

let opinion_right = document.querySelector('.opinion .main-container .next-pre-btns .fa-angle-right');

let opinion_boxs = document.querySelector('.opinion .main-container .container');




// loading onload

let loading = document.querySelector('.loading');

window.addEventListener("load",()=>{
  loading.style.display = "none";
})


// // if window scroll

// let navigation = document.querySelector('nav');

// window.addEventListener("scroll",()=>{
//   if(window.pageYOffset >= 20){
//     navigation.classList.add('nav');
//   }else{
//     navigation.classList.remove('nav');
//   }
  
  
//   if(window.pageYOffset >= 500){
//     navigation.classList.remove('nav');
//   }
  
//   if(window.pageYOffset < 20){
//     navigation.classList.remove('nav');
//   }

// })



// for left scroll
opinion_left.addEventListener("click",()=>{
  opinion_boxs.scrollLeft -= 200;
});
// for right scroll
opinion_right.addEventListener("click",()=>{
  opinion_boxs.scrollLeft += 200;
});



// for left scroll
most_popular_gigs_left.addEventListener("click",()=>{
  most_popular_gigs_cards.scrollLeft -= 200;
});
// for right scroll
most_popular_gigs_right.addEventListener("click",()=>{
  most_popular_gigs_cards.scrollLeft += 200;
});




// for navigation bar menu

let menu = document.getElementsByClassName('menu')[0];

let nav = document.querySelector("header nav ul");

menu.addEventListener("click",()=>{
  
  nav.classList.toggle('right');
  (menu.classList.contains("fa-bars"))? menu.classList.replace("fa-bars","fa-remove") : menu.classList.replace("fa-remove","fa-bars");
  
});



// for animation

AOS.init();