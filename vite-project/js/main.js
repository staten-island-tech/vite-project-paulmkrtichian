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
]

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

// button.addEventListener("click", () => {
// document.body.classList.add("warm");
// if (mode === "cold"){
//     mode = "warm";
//     button.textContent = "Change to Cold"
// }else{
//     mode = "cold"
//     button.textContent = "Change to Warm"
// } 
// });

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