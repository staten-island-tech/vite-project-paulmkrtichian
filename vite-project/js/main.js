 import "../css/style.css";
 const button = document.querySelector(".btn");

 document.addEventListener("DOMContentLoaded", function () {
   const DOMSelectors = {
     cardbox: document.getElementById("cardcontainer"),
   };
   const toys = [
     {
       name: "LEGO Classic Creative Bricks Set",
       type: "Building Blocks",
       price: 25.99,
       hasBatteries: "No",
       img: "https://m.media-amazon.com/images/I/91fLD7uWcaL.jpg",
     },
     {
       name: "Barbie Dreamhouse",
       type: "Dollhouse",
       price: 99.99,
       hasBatteries: "No",
       img: "https://i5.walmartimages.com/asr/ad9c70bb-8be0-4910-842a-96b17775f10b.1203a4cea9dac438e5cc74491c41e1f4.jpeg",
     },
     {
       name: "Hot Wheels 20 Car Gift Pack",
       type: "Toy Cars",
       price: 15.49,
       hasBatteries: "No",
       img: "https://m.media-amazon.com/images/I/71tF+RhyUXL.jpg",
     },
     {
       name: "Nerf N-Strike Elite Disruptor Blaster",
       type: "Toy Gun",
       price: 12.99,
       hasBatteries: "No",
       img: "https://m.media-amazon.com/images/I/616YdwhmIbL._AC_UF894,1000_QL80_.jpg",
     },
     {
       name: "Crayola Inspiration Art Case",
       type: "Art Supplies",
       price: 19.99,
       hasBatteries: "No",
       img: "https://m.media-amazon.com/images/I/91A9o5jh97L.jpg",
     },
     {
       name: "Paw Patrol Ultimate Rescue Fire Truck",
       type: "Action Figure Vehicle",
       price: 50.0,
       hasBatteries: "Yes",
       img: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1421241-847&recipeName=680",
     },
     {
       name: "Sphero Mini App-Enabled Programmable Robot Ball",
       type: "Robot Toy",
       price: 44.99,
       hasBatteries: "Yes",
       img: "https://m.media-amazon.com/images/I/61Cc-wOpwiL._AC_UF894,1000_QL80_.jpg",
     },
     {
       name: "LeapFrog LeapPad Academy Kids' Learning Tablet",
       type: "Educational Tablet",
       price: 129.99,
       hasBatteries: "Yes",
       img: "https://m.media-amazon.com/images/I/71yQZV2NEjL.jpg",
     },
     {
       name: "Play-Doh Modeling Compound 10-Pack",
       type: "Art and Craft",
       price: 7.99,
       hasBatteries: "No",
       img: "https://images.freshop.com/00032245235008/b62b9cad49d9ce307124f77a6c46732d_large.png",
     },
     {
       name: "VTech Kidizoom Smartwatch DX2",
       type: "Electronic Toy",
       price: 54.99,
       hasBatteries: "Yes",
       img: "https://m.media-amazon.com/images/I/81FbghVRGbL._AC_UF894,1000_QL80_.jpg",
     },
     {
       name: "LEGO Star Wars Millennium Falcon",
       type: "Building Blocks",
       price: 159.99,
       hasBatteries: "No",
       img: "https://m.media-amazon.com/images/I/81kmuPJ9IOL.jpg",
     },
     {
       name: "American Girl Doll",
       type: "Doll",
       price: 129.95,
       hasBatteries: "No",
       img: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1662177-847&recipeName=680",
     },
     {
       name: "DJI RoboMaster S1 Educational Robot",
       type: "Robot Kit",
       price: 499.99,
       hasBatteries: "Yes",
       img: "https://m.media-amazon.com/images/I/511fHhHG13L._AC_UF894,1000_QL80_.jpg",
     },
   ];
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
