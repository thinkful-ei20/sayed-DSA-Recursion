/*
  fib seq: 1, 1, 2, 3, 5, 8, 13
  input: 7
  output: fib seq

*/

function fibonacci(num) {

  for (let i = 2; i < num; i++) {
    let currNum = i;
    if (currNum === 0) {
      return 0;
    } else if (currNum === 1) {
      return 1;
    } else {
      return fibonacci(currNum - 1) + fibonacci(currNum - 2)
    }
  }
}

console.log(fibonacci(7))