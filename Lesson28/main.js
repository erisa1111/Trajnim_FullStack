var sum=0;
var i;
for(i=15; i<=47; i++){
    sum=sum+i;
    
}
console.log(sum);

var array=[1,2,3,4,5,6];
c=0;
sumarray=0;
for(c; c<array.length; c++){
    sumarray=sumarray+array[c];
}
console.log(sumarray);

var z=[1,3,5,7,9];
var sum_array2=0;
for(x of z){
    sum_array2+=x
}
console.log(sum_array2)

var sum_array3=0;
for(e in z){
    sum_array3+=e
}
console.log(sum_array3)

var names=[];
var button=document.getElementById("add");
var nameList=document.getElementById("nameList");

button.onclick = function() {
    var nameInput = document.getElementById("nameInput").value;
    names.push(nameInput);
    nameList.innerHTML=names;
};


