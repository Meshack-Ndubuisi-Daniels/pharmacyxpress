const homeJs = document.querySelector('.home-js-js')
homeJs.addEventListener('click',()=>{const homeLink='index.html'; window.location.href=`${homeLink}`});

const aboutJs = document.querySelector('.about-js-js')
aboutJs.addEventListener('click',()=>{const aboutLink='about.html'; window.location.href=`${aboutLink}`});

const contactJs = document.querySelector('.contact-js-js')
contactJs.addEventListener('click',()=>{const contactLink='contact.html'; window.location.href=`${contactLink}`});

const requestJs = document.querySelector('.request-js-js')
requestJs.addEventListener('click',()=>{const requestLink='https://docs.google.com/forms/d/e/1FAIpQLSeijlzuiRk2tIl4n_sQVfMYKF0VsftjUTi9A2blPiXI5WrBGg/viewform?usp=sf_link'; window.location.href=`${requestLink}`});




const ham=document.querySelector('.hidden-menu-js');
const hey= document.querySelector('.menu-button')

hey.addEventListener('click',()=>{if(ham.innerHTML==='') {ham.innerHTML=`<header class="header-js">
  <a href="index.html" class="home-js">Home</a>
  <div class="header-lines-js"></div>
  <a href="about.html" class="about-js">About</a>
  <div class="header-lines-js"></div>
  <a href="contact.html" class="contact-and-js">Contact and Address</a>
  <div class="header-lines-js"></div>
  <a href="https://forms.gle/2ZQhmGkcVPK37Py98" class="request-js">Request for a medicine</a>
  </header>`} else {ham.innerHTML=''}})


const contactUs = document.querySelector('.contact-button-js')
contactUs.addEventListener('click',()=>{const contactLink='contact.html'; window.location.href=`${contactLink}`});

  


const homeJsJs = document.querySelector('.home-js')
homeJsJs.addEventListener('click',()=>{const homeLink='index.html'; window.location.href=`${homeLink}`});

const aboutJsJs = document.querySelector('.about-js')
aboutJsJs.addEventListener('click',()=>{const aboutLink='about.html'; window.location.href=`${aboutLink}`});

const contactJsJs = document.querySelector('.contact-js')
contactJsJs.addEventListener('click',()=>{const contactLink='contact.html'; window.location.href=`${contactLink}`});

const requestJsJs = document.querySelector('.request-js')
requestJsJs.addEventListener('click',()=>{const requestLink='https://docs.google.com/forms/d/e/1FAIpQLSeijlzuiRk2tIl4n_sQVfMYKF0VsftjUTi9A2blPiXI5WrBGg/viewform?usp=sf_link'; window.location.href=`${requestLink}`});


