import { Footer } from "./Component/Footer/Footer.js";
let root = document.getElementById("root");
import { Banner } from "./Component/Banners/Banner.js";
import { Slider } from "./Component/Slider/slider.js";
import { Navbar } from "./Component/Navbar/navbar.js";
import { DynamicPage } from "./Component/Dynamic page/dynamicPage.js";
import { ScrollUp } from "./Component/scrollUp.js";

function App() {
  root.appendChild(Navbar());
  root.appendChild(Banner());
  root.appendChild(Slider("explore-by"));
  root.appendChild(Slider("yoga"));
  root.appendChild(Slider("meditation"));
  root.appendChild(Footer());
  root.appendChild(DynamicPage("dynamicpages"));
  // root.appendChild(ScrollUp());

}
App();

// Navbar blurred effect
let navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("transparentNav");
  } else {
    navbar.classList.remove("transparentNav");
  }
});
