//document.write("Test" + "<br><br><br>");

// let bike = "Salsa";
// document.write(bike.toUpperCase());
// document.write(typeof bike);

//Constructing Objects
// let bike = {};
// bike.color = "Red";
// document.write(bike.color);

let fullSuspension = {
    bike : "Salsa Rustler",
    color : "Blue Fade",
    components : ["XT Brakes" , "Zee Rear Der" , "Race Face Cranks"]
};

//document.write(fullSuspension.color + "<br>" + fullSuspension.components);
document.write(Object.keys(fullSuspension));