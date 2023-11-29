 import "../css/style.css";
 import { toys } from "./menu";
 const button = document.querySelector(".btn");

 document.addEventListener("DOMContentLoaded", function () {
   const DOMSelectors = {
     cardbox: document.getElementById("cardcontainer"),
   };
  
   function renderProducts(productList) {
     DOMSelectors.cardbox.innerHTML = "";
     productList.forEach((toy) => {
       const stuff = `
      <div class="cardcontainer">
        <h2>${toy.name}</h2>
        <h3>$${toy.price}</p>
        <img class="collection" src="${toy.img}" alt="">
        <p>BATTERIES?: ${toy.hasBatteries}</p>
        <p>TYPE: ${toy.type}</p>
        <p> ---------------------------------------------------------------------------------------------- </p>
      </div>`;
       DOMSelectors.cardbox.insertAdjacentHTML("beforeend", stuff);
     });
   }

   toys.forEach((toy) => {
     const stuff = `
    <div class="cardcontainer">
      <h2>${toy.name}</h2>
      <h3>$${toy.price}</p>
      <img class="collection" src="${toy.img}" alt="">
      <p>BATTERIES?: ${toy.hasBatteries}</p>
      <p>TYPE: ${toy.type}</p>
      <p> ----------------------------------------------------------------------------------------------</p>
    </div>`;
     DOMSelectors.cardbox.insertAdjacentHTML("beforeend", stuff);
   });

   document.querySelector(".btn2").addEventListener("click", function () {
     const cheapToys = toys.filter((toy) => toy.price < 50);
     renderProducts(cheapToys);
   });

   document.querySelector(".btn3").addEventListener("click", function () {
     const cheapToys = toys.filter(
       (toy) => toy.price >= 50 && toy.price <= 100
     );
     renderProducts(cheapToys);
   });

   document.querySelector(".btn4").addEventListener("click", function () {
     const cheapToys = toys.filter((toy) => toy.price > 100);
     renderProducts(cheapToys);
   });

   const app = document.getElementById("app");

   document.querySelector(".btn").addEventListener("click", function () {
     if (document.body.classList.contains("cold")) {
       document.body.classList.add("warm");
       document.body.classList.remove("cold");
       button.textContent = "Change to Cold";
     } else {
       document.body.classList.add("cold");
       document.body.classList.remove("warm");
       button.textContent = "Change to Warm";
     }
   });
 });
