
// Use three different arithmetic operators to generate each number
// Display the number combination on the HTML page or in an alert pop-up

let a = 33 * 3 / 9 - 1;
console.log(a);
let b = 4;
b = b + 5;
b = b % 5;
b = b * 10;
console.log(b);
let c = 30;
c = c - 9;
c = c / 7;
c = c * 13;
console.log(c);
let comb = `${a}-${b}-${c}`;
console.log(comb);
// when I put all operators in one line on variables b and c, it did not work (correctly). Questions for later I guess 
// probably due to order of operations? maybe if I used parentheses to control that. I'm surprised it auto PEMDAS
// I overcomplicated the requirements, and made each combination require three operators. oops.

//create string saying "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
const str1 = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "
alert(str1 + comb);

// combination should be 10-40-39

// trying something from chatGPT4o
document.getElementById('combination').textContent = comb;
