var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");

button.onclick=function(){
    text.innerHTML = input.value;
}

//var text= "The best school in the world is Digital School";
//var result = text.search("Digital school");
//document.getElementById("result1").innerHTML=result;


//var text= "The best school in the world is Digital School";
//var result = text.search(/Digital School/);
//document.getElementById("result2").innerHTML=result;


//var text= "The best school in the world is Digital School";
//var result = text.replace(/Digital School/,"Another School");
//document.getElementById("result3").innerHTML=result;


//var text= "abcdef";
//var regex=new RegExp('abc');
//document.getElementById("result4").innerHTML=regex.test(text);


//var text= "My school is the best school in the world";
//var regex= /school/g;
//document.getElementById("result5").innerHTML=text.match(regex);


//var text= "Digital school is the best school in the world";
//var regex= /i/g;
//document.getElementById("result6").innerHTML=text.match(regex);


//var text= "Digital school is the best school in the world";
//var regex= /[abc]/g;
//document.getElementById("result7").innerHTML=text.match(regex);


//var text= "Digital school is tin top 10 schools in the world";
//var regex= /[0-9]/g;
//document.getElementById("result8").innerHTML=text.match(regex);


//var text= "My school is the best school in the world";
//var regex= /(top|best|school)/g;
//document.getElementById("result9").innerHTML=text.match(regex);


//var text= "100 percent";
//var regex= /\d/g;
//document.getElementById("result10").innerHTML=text.match(regex);


//var text= "My school is the best school in the world";
//var regex= /\s/g;
//document.getElementById("result11").innerHTML=text.match(regex);


//var text= "Heeey, how are you";
//var regex= /e+/g;
//document.getElementById("result12").innerHTML=text.match(regex);


//var text= "so, i hope we'll see each other again soon...";
//var regex= /so*/g;
//document.getElementById("result13").innerHTML=text.match(regex);


//var text= "hey, hi, hiii, iii";
//var regex= /h1?/g;
//document.getElementById("result14").innerHTML=text.match(regex);


//var text= "hello, helloo, hellooo";
//var regex= /o{3}/g;
//document.getElementById("result15").innerHTML=text.match(regex);


//var text= "hello, helloo, hellooo, helloooo, hellooooo";
//var regex= /o{3,5}/g;
//document.getElementById("result16").innerHTML=text.match(regex);


//var text= "bestfriend, boyfriend, girlfriend";
//var regex= /end$/g;
//document.getElementById("result17").innerHTML=text.match(regex);


//var text= "cat, catalog, category";
//var regex= /^cat/g;
//document.getElementById("result18").innerHTML=text.match(regex);