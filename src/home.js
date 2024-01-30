function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");


  // Left column for the image
  const leftColumn = document.createElement("div");
  leftColumn.classList.add("home-left");
  const chefImage = document.createElement("img");
  chefImage.src = "https://images.alphacoders.com/102/thumb-1920-1020193.jpg";
  chefImage.alt = "Chef";
  leftColumn.appendChild(chefImage);

  const rightSection = document.createElement("div");
  rightSection.classList.add("home-right-section");

  // Adding new text lines
  rightSection.appendChild(createParagraph("⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☀︎｡ ⋆｡ ﾟ"));
  rightSection.appendChild(createParagraph("Fresh Coffee, Tasty Meals"));
  rightSection.appendChild(createParagraph("Best Cafe in town!"));

  const orderButton = document.createElement("button");
  orderButton.textContent = "Online Order";
  orderButton.classList.add("order-button");
  rightSection.appendChild(orderButton);
  
  
  home.appendChild(leftColumn);
  home.appendChild(rightSection);
  

  // Adding Social Media Icons to the header
  const header = document.querySelector('header');
  const socialMediaContainer = document.createElement('div');
  socialMediaContainer.classList.add('social-media-icons');
  
  ['facebook', 'twitter', 'instagram', 'pinterest'].forEach(icon => {
    const iconElement = document.createElement('i');
    iconElement.classList.add(`fab`, `fa-${icon}`);
    socialMediaContainer.appendChild(iconElement);
    });
  
      header.insertBefore(socialMediaContainer, header.firstChild);
 
    const utilityIconsContainer = document.createElement('div');
    utilityIconsContainer.classList.add('utility-icons');
  
    ['search', 'shopping-cart'].forEach(icon => {
        const iconElement = document.createElement('i');
        iconElement.classList.add(`fas`, `fa-${icon}`);
        utilityIconsContainer.appendChild(iconElement);
    });
  
    header.appendChild(utilityIconsContainer); // Append to the header  
return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
