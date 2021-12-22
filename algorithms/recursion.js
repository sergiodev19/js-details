function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n-1);
}

function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) +  fibonacci(num - 2);
};

console.log(factorial(7));
console.log(fibonacci(7));