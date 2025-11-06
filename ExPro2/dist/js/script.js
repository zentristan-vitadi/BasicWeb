const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const position = window.scrollY > 0
    navbar.classList.toggle("scrolling-active", position)
}) 








// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });