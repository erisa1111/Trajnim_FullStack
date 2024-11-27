<?php
function helloworld(){
    echo"hello world";
}
helloworld();

function fully_divisible($n){
    if($n%2==0){
        return "$n is divisible by 2";
    }else{
        return "$n is not divisible by 2";
    }

}
echo(fully_divisible(4)."<br>");

$x=5;

function globalVariable(){
    $y=10;
    echo "<br> $y";
}
echo "<br> $x";
globalVariable();
$a=20;
$b=30;
function ab(){
    global $a, $b;

}
ab();
echo"<br> $b <br>";

function staticVariable(){
    static $count=0;
    $count ++;
    echo"the value of count is $count <br>";
}

staticVariable();
staticVariable();
staticVariable();
staticVariable();

$sports = array("football","basketball","tennis","handball","swimming","pingpong",);

print_r($sports);
$sports =['football','basketball'];
$len = count($sports);
echo'<br>';
echo $sports[0];
echo "<br>".end($sports);
echo"<br>";

array_push($sports,'voleyball');
array_pop($sports);
array_unshift($sports,'tennis');

for($i= 0; $i < $len; $i++){
    echo $sports[$i],"\n";
}    
echo "<br>";    

$myvalue = array(12,23,45,56,67,78);
$len1=count($myvalue);
var_dump(array_sum($myvalue)/$len1);




?>
