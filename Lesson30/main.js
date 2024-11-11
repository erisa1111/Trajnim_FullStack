// for(i=0; i<10; i++){
//     console.log(i);
// }

// var car={brand:"BMW", year:2020, color:"black"};

// for(x in car){
//     document.write(car[x] +"<br>");
// }

// var names=['Ariana','Leon','Elsa'];
// for(x of names){
//     document.write(x+"<br>");
// }

// var text="Ariana";

// for(x of text){
//     document.write(x+"<br>")
// }

// document.write("Indeksat e elementeve ne text"+"<br>")
// for(x in text){
//     document.write(x+"<br>")
// }

let i = 0;
do{
    i++;
    document.write(i+"<br>")
}
while (i<5);

let x=0;
let y=0;

while(x<3){
    x++;
    //x=x+y;
    document.write("First loop--This is the value for x: "+x+" And this is the value for y: "+y+"<br>" )
    document.write("<br>"+"This is the value for y+=x: "+(y+=x)+"<br>");
}

var artists=['eminem', 'rihanna','lady gaga','beyonce','jay z'];

artists.push('Erisa');
var popped =artists.pop(artists[0]);
artists.unshift("Merjeme");
console.log(popped);
for(x=0; x<artists.length; x++){
    console.log(artists[x]);
}

let classesEnrolled = [];

var addButton = document.getElementById("add");
var showButton = document.getElementById("show");

addButton.onclick=function() {
    var classInput = document.getElementById("newclass").value;
    classesEnrolled.push(classInput);   
}


showButton.onclick=function(){
    console.log(classesEnrolled);

}