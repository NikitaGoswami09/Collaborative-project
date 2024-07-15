function Navbar() {

  let NavbarContainer = document.createElement("nav");
  NavbarContainer.innerHTML = `
  
  <div id="logo">
  <a href="#logo">TreasureHealth</a>
  </div>
  <div>
  <a href="#banner">Home</a>
  <a href="#Products&services">Products & Services</a>
  <a href="#Events">Events</a>
  <a href="#ContactUs">ContactUs</a>
  <a href="#Blogs">Blogs</a>
  </div>
  <div id="user">
  User
  <i class="fa-solid fa-user"></i>
  </div>
`
  return NavbarContainer;
}

export { Navbar };
