

const ham=document.querySelector('.ham-menu')
const nav=document.querySelector('.nav-menu')

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
  });