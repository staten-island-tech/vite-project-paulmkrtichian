 import "../css/style.css";
 const button = document.querySelector(".btn")
 let mode = "cold";
/* import { Menu, Name } from "./menu";
console.log (Menu, Name);
*/
/* const MMAfighters = [
    {
      fName: "John",
      lName: "Jones",
      record: ['27 wins','1 loss'],
      heightweight: ['193.04 cm','248 lbs'],
      fromRussia: "No",
    },
    {
      fName: "Khabib",
      lName: "Nurmagomedov",
      record: ['29 wins','0 losses'],
      heightweight: ['177.8 cm','155 lbs'],
      fromRussia: "Yes",
    },
    {
      fName: "Islam",
      lName: "Makhachev",
      record: ['24 wins','1 loss'],
      heightweight: ['177.8 cm','155 lbs'],
      fromRussia: "Yes",
    },
    {
      fName: "Charles",
      lName: "Oliverira",
      record: ['34 wins','9 loss'],
      heightweight: ['177.8 cm','154 lbs'],
      fromRussia: "No",
    },
    {
      fName: "Amanda",
      lName: "Nunes",
      record: ['21 wins','4 losses'],
      heightweight: ['170.18 cm','145 lbs'],
      fromRussia: "No",
    },
    {
      fName: "Israel",
      lName: "Adesanya",
      record: ['21 wins','1 loss'],
      heightweight: ['193.04 cm','185 lbs'],
      fromRussia: "No",
    },
    {
      fName: "Conor",
      lName: "McGregor",
      record: ['22 wins','5 losses'],
      heightweight: ['175.26 cm','155 lbs'],
      fromRussia: "No",
    },
    {
      fName: "Rose",
      lName: "Namajunas",
      record: ['11 wins','4 losses'],
      heightweight: ['165.1 cm','115 lbs'],
      fromRussia: "No",
    },
    {
      fName: "Max",
      lName: "Holloway",
      record: ['22 wins','6 losses'],
      heightweight: ['180.34 cm','145 lbs'],
      fromRussia: "No",
    },
    // Add more fighters as needed
  ];

  MMAfighters.forEach((MMAfighters) => console.log(MMAfighters.fName + " " + MMAfighters.lName));

  MMAfighters.forEach((MMAfighters) => {
      console.log(MMAfighters.fName + " " + MMAfighters.lName + ' record:');
      MMAfighters.record.forEach((recordwinloss) => {
          console.log(recordwinloss);
      });
  });
  
  MMAfighters.forEach((MMAfighters) => {
      console.log(MMAfighters.fName + " " + MMAfighters.lName + ' heightweight:');
      MMAfighters.heightweight.forEach((heightincmsweightinlbs) => {
          console.log(heightincmsweightinlbs);
      });
  });
  
  const Russian = MMAfighters.filter((MMAfighters) => MMAfighters.fromRussia === 'Yes');
  console.log(Russian);
  
*/
const toys = [
  {
    name: "LEGO Classic Creative Bricks Set",
    type: "Building Blocks",
    price: 25.99,
    hasBatteries: "No",
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
    name: "FurReal Friends Ricky, the Trick-Lovin' Pup",
    type: "Interactive Toy",
    price: 59.95,
    hasBatteries: "Yes",
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
    name: "Melissa & Doug Wooden Building Blocks Set",
    type: "Wooden Blocks",
    price: 34.95,
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


});