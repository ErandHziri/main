var colors=[ 'red', 'green', 'blue' ,'purple' ];

function changeBgColor(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];
}

var names=['Anid', 'Fron', 'Esma', 'Erand'];

function changeNames(){
    document.querySelector('p').innerHTML =
    names[Math.floor(Math.random()*names.length)];
}

setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);