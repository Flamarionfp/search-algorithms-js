const numbers = [1, 3, 5, 8, 11, 12, 15, 20, 21, 24, 27, 45, 67, 76, 77, 98];

function searchNumber(number) {
  for (let i = 0; i < numbers.length; i++) {
    if (number === numbers[i]) {
      return {
        found: true,
        index: i,
      };
    }
  }
  return { found: false };
}

let numberToSearch = 15;
const { found, index } = searchNumber(numberToSearch);
if (found) {
  console.log(
    `O número ${numberToSearch} foi encontrado dentro da lista no índice ${index}`
  );
  console.log(`Foi passado pelo looping ${index + 1} vezes`);
} else {
  console.log(`O número ${numberToSearch} não foi encontrado dentro da lista`);
}
