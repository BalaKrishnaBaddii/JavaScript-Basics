const checkPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
// print first 10 prime numbers..
flag = 0;
const primeten = (n, f) => {
  for (let i = 0; i <= n; i++) {
    const c = checkPrime(i);
    if (flag === f) {
      break;
    }
    if (c === true) {
      console.log(i);
      flag += 1;
    }
  }
};

primeten(1000, 10); // will get first 10 prime in 100
