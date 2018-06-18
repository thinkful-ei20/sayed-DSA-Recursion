/*
  factorial(num)
  input: 5
  output: 5*4*3*2*1 = 120

*/

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

factorial(5);