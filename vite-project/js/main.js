 import "../css/style.css";
 const button = document.querySelector(".btn")
 

 const toys = [
  {
    name: "LEGO Classic Creative Bricks Set",
    type: "Building Blocks",
    price: 25.99,
    hasBatteries: "No",
   /* "img": "https://th.bing.com/th/id/OIP.LwsB9DSXijUSDoQkYiKqpgHaJQ?rs=1&pid=ImgDetMain"*/
  },
  {
    name: "Barbie Dreamhouse",
    type: "Dollhouse",
    price: 99.99,
    hasBatteries: "No",
  },
  {
    name: "Hot Wheels 20 Car Gift Pack",
    type: "Toy Cars",
    price: 15.49,
    hasBatteries: "No",
  },
  {
    name: "Nerf N-Strike Elite Disruptor Blaster",
    type: "Toy Gun",
    price: 12.99,
    hasBatteries: "No",
  },
  {
    name: "Crayola Inspiration Art Case",
    type: "Art Supplies",
    price: 19.99,
    hasBatteries: "No",
  },
  {
    name: "Paw Patrol Ultimate Rescue Fire Truck",
    type: "Action Figure Vehicle",
    price: 49.99,
    hasBatteries: "Yes",
  },
  {
    name: "Sphero Mini App-Enabled Programmable Robot Ball",
    type: "Robot Toy",
    price: 44.99,
    hasBatteries: "Yes",
  },
  {
    name: "LeapFrog LeapPad Academy Kids' Learning Tablet",
    type: "Educational Tablet",
    price: 129.99,
    hasBatteries: "Yes",
  },
  {
    name: "Play-Doh Modeling Compound 10-Pack",
    type: "Art and Craft",
    price: 7.99,
    hasBatteries: "No",
  },
  {
    name: "VTech Kidizoom Smartwatch DX2",
    type: "Electronic Toy",
    price: 54.99,
    hasBatteries: "Yes",
  },
  {
    name: "LEGO Star Wars Millennium Falcon",
    type: "Building Blocks",
    price: 159.99,
    hasBatteries: "No",
  },
  {
    name: "American Girl Doll",
    type: "Doll",
    price: 129.95,
    hasBatteries: "No",
  },
  {
    name: "DJI RoboMaster S1 Educational Robot",
    type: "Robot Kit",
    price: 499.99,
    hasBatteries: "Yes",
  }
]
function createtoycard(toy){
  const toydata = `
<p>${toy.name}</p>
<p>${toy.type}</p>
<p>${toy.price}</p>
<p>${toy.hasBatteries}</p>`
  
  productList.insertAjacentHTML('beforeend', toydata)
}

 const app = document.getElementById('app');

function renderProducts(productList) {
  app.innerHTML = '';
  productList.forEach((toy) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `${toy.name}, ${toy.price} ${toy.img}`;
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
