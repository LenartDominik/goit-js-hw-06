const categories = document.querySelector("ul#categories");
const liItems = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((e) =>
  console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelectorAll("li").length} `
  )
);
