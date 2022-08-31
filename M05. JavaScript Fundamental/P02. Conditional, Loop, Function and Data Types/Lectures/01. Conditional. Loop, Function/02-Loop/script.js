let array = [1, 3, 3, 2, 4];
let value = 3;
let i;
for ( i = 0; i< array.length; i++) {
	if (array[i] == value) {
		break;
	}
}
console.log(value + " first appeaers in the " + (i+1) + " position");
// Skip iterations with continue:
for (let i=0; i<5; i++){
	if (i==3) continue;
	console.log("i is now " + i);
}
//this loop will print the value of i, except for when i is 3.
// Labels with loops:
outerLoop: for (let i = 0; i<5; i++) {
	innerLoop: for (let j = 0; j<i; j++) {
			if (j == 4) {
					break outerLoop;
				}
		}
} 
