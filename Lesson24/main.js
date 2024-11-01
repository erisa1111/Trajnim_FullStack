function showMessage(){
    alert("This message is inside a function");
}
//showMessage();
function sum(x,y){
    return x+y;
}

console.log(sum(5,9));
document.write(sum(20,7)+"<br>");

var arrowfunction= name => alert(`Hello ${name}`);
arrowfunction("Erisa");

function localvar(){
    var local_var=3;
    return local_var;
}
console.log(localvar());

//console.log(local_var);
//nuk mundemi me ju qase variables lokale te deklaruar brenda funksionit!

function seconds(minutes){
    return minutes*60;
}

//seconds();

document.write(seconds(60)+"<br>");

console.log(seconds(35));


var car ={
    name:"Mercedes",
    color:"red",
    kilometers:0,
    year:2020,
    startEngine :function(){
        alert("VROOOM!!");
    },

    get getKilometers(){
        return this.kilometers;
    },
    
    set setKilometers(km){
        this.kilometers=km;
    }
}
console.log(car.name);
document.write(car.year +"<br>"+car.name+"<br>"+car.color);
document.write("<br>"+car['color']+"<br>");
car.startEngine();

var computer =new Object();
computer.name="Lenovo";
computer.cpu="Intel core i7";
computer.ram="32GB";
computer.gpu="GeForce GT730 2GB Dual DP HP";
computer.type=function(){
    return this.name+", "+this.cpu+", "+this.gpu+", "+this.ram;
}

console.log(car.getKilometers);
car.setKilometers=120;
console.log(car.getKilometers);

document.write("These are the properties of our computer"+"<br>")
document.write(computer.type()+"<br>"); 
delete computer.gpu;
document.write(computer.type())


function Computer(name, cpu, ram, gpu){
    this.name=name;
    this.cpu=cpu;
    this.gpu=gpu;
    this.ram=ram;
    this.toString = function() {
        return `${this.name}, ${this.cpu}, ${this.ram}, ${this.gpu}`;
    }
}

var computer1=new Computer("Macbook Pro","M1 Chip", "8GB", "560M");
var computer2=new Computer("Dell","Intel i7", "16GB", "560M");
document.write("<br>"+"these are the performances of the mac laptop: "+computer1)
document.write("<br>"+"these are the performances of my laptop hehe, mine is better...:"+computer2);

