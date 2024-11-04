var programmingL = ['JavaScript','Python','PHO'];

console.log(programmingL[1]);
document.write(programmingL);
programmingL.pop();
//console.log(programmingL);
//console.log(programmingL[1]);
document.write(programmingL);
programmingL.push('Java');
programmingL.unshift('c#');
programmingL.shift();
programmingL.splice(1,1,'Ruby')
console.log(programmingL);
console.log(programmingL[1]);
document.write(programmingL);
console.log(Math.random()*5);
console.log(Math.floor(Math.random()*6));

//deconstructing
var students=['Ariana','Leon'];
var[s1,s2]=students;
console.log(students);
console.log(s1);
console.log(s2);

var places=['London','Berlin','Paris','New York'];
var [firstPlace, , secondPlace]=places;
console.log(firstPlace);
console.log(secondPlace);

var numbers=[1,2,3,4,5,6,7,8,9,10];

var[firstNumber, secondNumber,...otherNumber]=numbers;
console.log(secondNumber);
console.log(otherNumber);