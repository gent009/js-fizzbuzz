// TODO: Write your function in this file
function fizzBuzz (lower, upper){
const result = [];
for (let i = lower; i<= upper; i++){

    let output ='';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    result.push(output || i);
}
return result;
}
console.log(fizzBuzz(1, 30));
// TODO: Change undefined below to the name of your function

module.exports = fizzBuzz
