function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  // Create a full-page SVG image element
  const menuImage = document.createElement("img");
  menuImage.src = "/dist/images/food/Artboard 1.png"; // Update with the path to your SVG image
  menuImage.alt = "Full Page Background";
  menuImage.classList.add("menu-background");

  // Append the full-page SVG to the menu
  menu.appendChild(menuImage);

  return menu;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
