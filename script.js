//document.write("Test" + "<br><br><br>");

// let bike = "Salsa";
// document.write(bike.toUpperCase());
// document.write(typeof bike);

//Constructing Objects
// let bike = {};
// bike.color = "Red";
// document.write(bike.color);

// let fullSuspension = {
//     bike : "Salsa Rustler",
//     color : "Blue Fade",
//     components : ["XT Brakes" , "Zee Rear Der" , "Race Face Cranks"]
// };

// //document.write(fullSuspension.color + "<br>" + fullSuspension.components);
// document.write(Object.keys(fullSuspension));

//Create an empty array and push parameters to it from the addEntry(function)
let journal = [];
let addEntry = (input)=>{
    journal.push([input]);
}

addEntry(["red", "Ragley", "Race Face", "Shimano XT"], true );
//document.write(journal);

for(let value of journal){
    document.write(value);
}

//document.write(Math.max(10, 25, 30));

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   document.write("Your number is" + theNumber);
// } else {
//     document.write("booooo hoooo");
// }

let number = 1;

while(number <= 15){
    document.write(number + " " + "<br>");
    number ++;
}

// for(counter = 0; counter<=10; counter = counter +1){
//     number = number *2;
//     document.write(number + "<br>");
// }


