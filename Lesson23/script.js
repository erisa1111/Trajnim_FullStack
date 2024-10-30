function showMessage(){
    alert("This is inside function")
}

function shuma(nr1, nr2){
    return nr1+nr2;
}
console.log(shuma(3,4))

function farTocels(far_val){
    return (5/9)*(far_val-32);
}
console.log(farTocels(70))

var arrowFunction=()=> alert("Hello World");
//arrowFunction();
var pershendetje = emri => alert(`Miredita ${emri}`);
//pershendetje("Erisa");

/*function dsFunction(){
    var localVar="Digital School";
    console.log(localVar);
}*/
//dsFunction();
//alert(localVar);

function triangleArea(base, height){
    return 0.5*base*height;
}

console.log(triangleArea(3,5));

// te lesson 23 vahdojme tek objektet me arianen

var car={
    brand:"BMW",
    color:"Black",
    year:2020,
    startEngine: function(){
        alert("Vrooom!!!");
    },
    get GetCOLOR(){
        return this.color;
    }, 
    set SetCOLOR(newColor){
        this.color=newColor;
    }
}

console.log(car['brand']);
console.log(car.brand);
car.startEngine();

var computer= new Object();
computer.name="Lenovo";
computer.CPU="Intel core i7";
computer.RAM="16GB";

computer.type=()=>{
    console.log("Start PC");
}

computer.type();
console.log("What color is ur current car?")
console.log(car.GetCOLOR);


