// when wrtiting a string, you need to surround the text with either
// // single or double quotes
// let name1 = "Mark Zuckerberg";
// let name2 = 'Mark Zuckerberg';

// // you can include a single quote inside a double or vice versa
// let string1 = "His name is 'Mark Zuckerberg'";
// let string2 = 'His name is "Mark Zuckerberg"';

// //Using the same quote mark inside and outside a string will
// //cause an error
// let string1 = "His name is "Mark Zuckerberg"";// INCORRECT
// //you can bypass this problem by using an escaping character
// let string2 = "His name is \"Mark Zuckerberg\"";// CORRECT

// example 
let texts = "DSC is awesome!!!";
console.log(text.length); //17
// slice(starting position, end position) will return part
// of the string from the start to end position 
// (not including the end postion)
let bowl = "Apple, Banana, Candy";
console.log(bowl.slice(0,13)); // "Apple, Banana"
- includes()
- indexOf()
- toUpperCase()
- toLowerCase()
- replace()
- slice()
- length()
// template strings 
let text = `Hello World!`;

let firstName = "Jeff";
let lastName = "Bezos";
let textt = `Welcome ${firstName}, ${lastName}!`;
console.log(text); //Welcome Jeff Bezos