document.write("JavaScript is a simple language for javatpoint learners"); 

var x = 10;  
var y = 20;  
var z=x+y;  
document.write(z); 

var data=200;//gloabal variable  
function a(){  
document.writeln(data);  
}  
function b(){  
document.writeln(data);  
}  
a();//calling JavaScript function
b();
  
var value=50;//global variable  
function c(){  
alert(value);  
}  
function d(){  
alert(value);  
}  

d();

var a=20;  
if(a>10){  
document.write("value of a is greater than 10");  
} 

var a=20;  
if(a%2==0){  
document.write("a is even number");  
}  
else{  
document.write("a is odd number");  
} 

var a=20;  
if(a==10){  
document.write("a is equal to 10");  
}  
else if(a==15){  
document.write("a is equal to 15");  
}  
else if(a==20){  
document.write("a is equal to 20");  
}  
else{  
document.write("a is not equal to 10, 15 or 20");  
}  

var grade='B';  
var result;  
switch(grade){  
case 'A':  
result="A Grade";  
break;  
case 'B':  
result="B Grade";  
break;  
case 'C':  
result="C Grade";  
break;  
default:  
result="No Grade";  
}  
document.write(result); 