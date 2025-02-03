var button1=document.getElementById('btn1');
var button2=document.getElementById('btn2');
var button3=document.getElementById('btn3');
var button4=document.getElementById('btn4'); 

button1.onclick=function()
{
    alert('Hello');
}

button2.onmouseover=function()
{
    alert('Hello');
}

button3.onmouseleave=function()
{
    alert('Hello');
}

button4.onmousewheel=function()
{
    alert('Hello');
}

var firstButton=document.querySelector('button');

firstButton.onclick=function(){
    alert('Heloo world!')
}

button3.addEventListener('click' , function(){
alert('hello from Digital School')
} );

