 import "../css/style.css";
 import { toys } from "./menu";
 const button = document.querySelector(".btn");

 document.addEventListener("DOMContentLoaded", function () {
   const DOMSelectors = {
     cardbox: document.getElementById("cardcontainer"),
   };
  
   function filtertoys(productList) {
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
function filterbatterytoys(productList) {
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
function filternobatterytoys(productList) {
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
   const toyCards = toys.map((toy) => `
   <div class="cardcontainer">
     <h2>${toy.name}</h2>
     <h3>$${toy.price}</h3>
     <img class="collection" src="${toy.img}" alt="">
     <p>BATTERIES?: ${toy.hasBatteries}</p>
     <p>TYPE: ${toy.type}</p>
     <p> ----------------------------------------------------------------------------------------------</p>
   </div>
 `);
 
 toyCards.forEach((card) => {
   DOMSelectors.cardbox.insertAdjacentHTML("beforeend", card);
 });
   document.querySelector(".btn2").addEventListener("click", function () {
     const cheapToys = toys.filter((toy) => toy.price < 50);
     filtertoys(cheapToys);
   });

   document.querySelector(".btn3").addEventListener("click", function () {
     const cheapToys = toys.filter(
       (toy) => toy.price >= 50 && toy.price <= 100);
     filtertoys(cheapToys);
   });

   document.querySelector(".btn4").addEventListener("click", function () {
     const cheapToys = toys.filter((toy) => toy.price > 100);
     filtertoys(cheapToys);
   });
  
  document.querySelector(".btn5").addEventListener("click", function () {
  const batteryusage = toys.filter((toy) => toy.hasBatteries === 'Yes');
  filterbatterytoys(batteryusage);
});
document.querySelector(".btn6").addEventListener("click", function () {
  const batteryusage = toys.filter((toy) => toy.hasBatteries === 'No');
  filterbatterytoys(batteryusage);
});
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
