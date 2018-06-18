function reverseString(str) {
  if (str === '') {
    return '';
  }

  const lastChar = str[str.length-1];

  return lastChar + reverseString(str.slice(0, -1));
}

reverseString('sayed');