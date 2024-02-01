import myPicture from "/dist/images/food/Artboard 1.png";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const banner = new Image();
  banner.src = myPicture;

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

