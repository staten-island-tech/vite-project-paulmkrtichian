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

document.querySelector(".btn2").addEventListener("click", function ()  {
  const filteredProducts = toys.filter(toy => toy.price < 50);
  renderProducts(filteredProducts);
});

document.querySelector(".btn3").addEventListener("click", function ()  {
  const filteredProducts = toys.filter(toy => toy.price >= 50 && toy.price <= 100);
  renderProducts(filteredProducts);
});

document.querySelector(".btn4").addEventListener("click", function ()  {
  const filteredProducts = toys.filter(toy => toy.price > 100);
  renderProducts(filteredProducts);
});
