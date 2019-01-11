

//Test 1 - Verify if s exists in the given string

var string = "my string";

regex = /str/; //retorna um objeto..
regex2 = /str/g;  //retorna apenas o que achar..

result = string.match(regex);

result2 = string.match(regex2);

console.log(result); //output: [ 's', index: 3, input: 'my string', groups: undefined ]
console.log(result2); //output: [ 'str' ]




//Test 2 - if don't find, return null 

var regex = /a/;

var result = string.match(regex);

console.log(result); //null = nao encontrou o caracter "a" na string acima.



//Test 3 - Another way to create regex

var re = new RegExp("str", "g"); 

console.log(string.match(re)); //output: [ 'str' ]