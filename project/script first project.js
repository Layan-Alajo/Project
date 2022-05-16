const mobilebutton= document.querySelector("#mobile-toggle");
 //console.log(mobilebutton)
 const navitems =document.querySelector(".nav-items");
  //  console.log(navitems);
  const navlinks =document.querySelectorAll(".nav-link");

 mobilebutton.addEventListener("click", () =>{
    navitems.classList.toggle("active");
});

navlinks.forEach((navlink) => {
navlink.addEventListener("click" , () => {
   navitems.classList.toggle("active");
});
});