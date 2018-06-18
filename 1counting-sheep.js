function countdown(num) {
  if (num === 0) {
    return;
  }
  console.log(`${num} - Another sheep jumps over the fence`);
  countdown(num - 1);
}

countdown(3);