//asynchronous programming
// function printNames(){
//     document.write("Ariana"+"<br>");
//     setTimeout(function(){
//         document.write("Donika");
//     }, 3000);
//     document.write("Eltoni");
// }

// printNames();

// var colors=['green','blue','purple','pink','red'];

// function changeColor(){
//     document.querySelector('body').style.background = 
//     colors[Math.floor(Math.random()*colors.length)];
// }

// changeColor()

// var names=['Erisa','Jona','Aneta','Adelina','Rinesa','Alketa'];

// function changeName(){
//     document.querySelector('p').innerHTML=
//     names[Math.floor(Math.random()*names.length)];
// }
// setInterval(changeColor,1000);
// setInterval(changeName,1000);
var circle = document.getElementsByClassName("circle")[0]
var showTime = document.getElementById("time"); 
var timeStart = new Date().getTime();

function showCircle() {
    circle.style.display = "block";
    circle.style.top = Math.random() * 500 + "px";
    circle.style.left = Math.random() * 900 + "px";
    timeStart = new Date().getTime();
}

showCircle();

circle.onclick = function() {
    circle.style.display = "none";
    setTimeout(showCircle, 1000);
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timeStart) / 1000;
    showTime.innerHTML = time+ 's'; 
    setInterval(circle.style.backgroundColor = randomColor(),1000);
}   

function randomColor() {
    var s = '0123456789ABCDEF';
    var color = "#";
    for (var i = 0; i < 6; i++) { // Declare `i`
        color = color + s[Math.floor(Math.random() * 16)];
    }
    return color;
}

//circle.style.backgroundColor = randomColor();
