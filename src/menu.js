import myPicture from "../dist/images/Artboard.png";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const banner = new Image();
  banner.src = myPicture;
  banner.classList.add("menu-banner"); // Add this line to target the image with CSS

  // Append the full-page image to the menu
  menu.appendChild(banner);

  return menu;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;



