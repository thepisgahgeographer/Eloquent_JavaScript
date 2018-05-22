// var test = document.getElementById("test").addEventListener("click", popUp);

// function popUp(){
//     document.getElementById("two").innerHTML = "Hello World";
//     window.alert("hello");
// }

// function Counter(i){
//         for(i; i<10; i++){
//            "<p>" + document.write(i) + "</p>";
//         };
// }

// test;

// Counter(5);

/*Requests input from the user and checks to see if it matches the type*/
// let theNumber = Number(window.prompt("Number is"));

// if (!Number.isNaN(theNumber)){
//     console.log("Number Is" + theNumber);
// }

// let bike = "grey";
// if (bike != "grey"){
//     console.log("False");
// }
// else if (bike == "orange") {
//     console.log("False2");
// }
// else {
//     console.log("True");
// }

// let number = 0;
// while(number<=12){
//     console.log(number++);
// }

// let result = 2;
// let counter = 0;

// while (counter <10){
//     result = result *2;
//     counter++;
// }

// console.log(result);

// for(let counter = 0; counter <=10; counter++){
//     console.log(counter);
//     //break;
// }

// switch(window.prompt("Bike Color")){
//     case "red":
//     console.log("red");
//     case "black":
//     console.log("black");
//     break;
// }

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
        console.log(y + x);
    }

    board += "\n";
}

console.log(board);