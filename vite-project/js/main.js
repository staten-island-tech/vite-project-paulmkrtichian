 import "../css/style.css";
 import toys from "./menu";
 const button = document.querySelector(".btn")


 const app = document.getElementById('app');

function renderProducts(productList) {
  app.innerHTML = '';
  productList.forEach((toy) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `${toy.name}, ${toy.price}`;
    app.appendChild(card);
  });
}
renderProducts(toys);

// User interaction - filter products based on a condition
/*document.getElementById('btn2').addEventListener('click', () => {
  const filteredProducts = toys.filter(toy => toy.price < 50);
  renderProducts(filteredProducts);
});
*/


/* import { Menu, Name } from "./menu";
console.log (Menu, Name);
*/

 /*function createcard(toy){
  const toycard = document.createElement('div')
  toycard.classList.add('toy-card');
  toycard.textContent = `${toy.name} ${toy.type} ${toy.price} ${toy.hasBatteries}`;
  toys.appendChild(toycard);
}
*/
/* function display(toys){
toycards.textContent = ``;
toys.forEach(createcard)
}
display(toys);
*/
/* document.getElementById("demo").innerHTML = `${toys.name}, ${toys.type}, ${toys.price}, ${toys.hasBatteries}`; */
/* const demoElement = document.getElementById('demo');

/*const cheap = toys.filter((toys) => toys.price < 50);
console.log(cheap); */

 /* let htmlString = '<ul>';
  toys.forEach(toy => {
    htmlString += `<li>Name: ${toy.name}, Type: ${toy.type}, Price: $${toy.price.toFixed(2)}, Batteries: ${toy.hasBatteries}</li>`;
  });
 
  htmlString += '</ul>';
  demoElement.innerHTML = htmlString;

 
*/
document.querySelector(".btn").addEventListener("click", function () {
if (document.body.classList.contains("cold")){
    document.body.classList.add("warm");
    document.body.classList.remove("cold");
    button.textContent = "Change to Cold"
} else {
    document.body.classList.add("cold");
    document.body.classList.remove("warm")
    button.textContent = "Change to Warm"
}

})

document.que('btn2').addEventListener('click', () => {
  const filteredProducts = toys.filter(toy => toy.price < 50);
  renderProducts(filteredProducts);
});
/*
document.querySelector(".btn2").addEventListener("click", function () {
  if (toys.price < 50){
    toys.filter((toys) => toys.price < 50)
  }

})
*/