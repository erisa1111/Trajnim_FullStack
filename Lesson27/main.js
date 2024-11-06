var x=10;
var y=5;
if(x>y){
    console.log("This is true")
}
else{console.log("X is not greater than y");

}
var input =document.getElementById("input_id1");
var input =document.getElementById("input_id2");
var button =document.getElementById("btn_id");
var text =document.getElementById("text_id");
var button1= document.getElementById("answer");
var result= document.getElementById("result");
var input1 =document.getElementById("input1_id");
var input2 =document.getElementById("input2_id");

// button.onclick = function(){
//     text.innerHTML=Number(input_id1.value)+Number(input_id2.value);
// }

button1.onclick = function(){
         result.innerHTML=parseInt(input1.value)+parseInt(input2.value);
}
