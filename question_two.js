function isFibonacci(num) {
    if (num < 0) return false; 

    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) return true;
    
    let nextFib = a + b;

    while (nextFib <= num) {
      if (nextFib === num) return true; 

      a = b;
      b = nextFib;
      nextFib = a + b;
    }

    return false;
  }

  function checkFibonacci(num) {
    if (isFibonacci(num)) {
      console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
  }

  const number = 15;
  checkFibonacci(number);