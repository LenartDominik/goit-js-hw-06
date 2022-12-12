const categoriesList = document.querySelector("ul#categories");

const numCategories = categoriesList.childElementCount;

for (let i = 0; i < numCategories; i++) {

  const categoryHeader = categoriesList.children[i].querySelector('h2');
    const numItems = categoriesList.children[i].querySelectorAll('li').length;
    
  console.log(`Category: ${categoryHeader.textContent} (${numItems} items)`);
}

