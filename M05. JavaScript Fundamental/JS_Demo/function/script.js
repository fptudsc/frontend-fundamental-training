function decl() {
	console.log("function declaratoin.");
}

var expr = function() {
	console.log("function expression.");
}

var cons = new Function('console.log("function constructor");');

//This is how you invoke them:
decl();
expr();
cons();
// Recursive function 
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));   // 8
