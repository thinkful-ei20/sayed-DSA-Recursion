function binaryRep(num) {
  if (num === 0) {
    return '';
  }
  let binary = Math.floor(num % 2);

  return binaryRep(Math.floor(num / 2)) + binary;
}

binaryRep(5);