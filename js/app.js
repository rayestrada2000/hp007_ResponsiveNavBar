const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");


  // Hamburger Toggle Nav when clicked
  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .25}s`;
      }

    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });


}
navSlide();

// Recommeded list of functions to keep cleaner.
/*
const app = ()=>{
 navSlide(); 
 navSlide(); 
 navSlide(); 
 navSlide(); 
}
*/
    class Rectangle {
      constructor(_width, _length, _color) {
        console.log("The Rectangle is being created");
        this.width = _width;
        this.length = _length;
        this.color = _color;
      }
      area() {
        return this.width * this.length
      }
    }

const rectangle1 = new Rectangle(5, 3, "blue");
console.log(rectangle1.width * rectangle1.length);
console.log(`The area of the Rectangle is ${rectangle1.area()}`);