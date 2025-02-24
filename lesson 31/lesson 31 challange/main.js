var students =["Orgesi", "Froni", "Avdyl"];

for(i=0;i<students.length; i++){
    document.write(students[i]+ 'br');

}


var name_input = document.getElementById("name_input");
var btnAdd = document.getElementById("btnAdd");
var btnShow = document.getElementById("btnShow");

btnAdd.onclick=function(){
    students.push(name_input.value);
}

btnAdd.onclick=function(){
    for(i=0 < students.length; i++ ){
        document.write(students[i]+ '<br>')
    }
}