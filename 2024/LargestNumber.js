const numbers = [1, 2, 3, 4, 6, 687, 34, 6, 723];

let temp = 0;

for (i = 0; i < numbers.length; i++) {
  for (j = i + 1; j < numbers.length; j++) {
    if (numbers[j] > numbers[i]) {
      temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log(numbers[0]);

const findLarge = Math.max(...numbers);
findLarge;
