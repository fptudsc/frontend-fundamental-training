const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
///Example 
const persons = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
      fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

// Bracket notion
for (property in person) {
	console.log(property); // firstName
	console.log(person[property]); // John
}
// setting object members 
person["age"] = 45;
person.farewell = function() {
  console.log('Bye everybody!');
}
const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;