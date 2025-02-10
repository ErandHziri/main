var programmingLanguages = ['JavaScript', 'PHP', 'Python'];

console.log(programmingLanguages);


console.log(programmingLanguages[0]);

programmingLanguages.push('Java');
console.log(programmingLanguages);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.unshift('c#');
console.log(programmingLanguages);

programmingLanguages.shift();
console.log(programmingLanguages);

programmingLanguages.splice( 0,2, 'Ruby');
console.log(programmingLanguages);

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5 ));

var students=['Anid','Reald'];

var[s1,s2]=students;
console.log(s1);
console.log(s2);

var places=['London', 'Paris', 'New York', 'Berlin'];

var[firstPlace, secondPlaces ]=places;

console.log(secondPlace);



var number=[1,2,3,4,5,6,7,8,9,10];

var[first, secon, ...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());