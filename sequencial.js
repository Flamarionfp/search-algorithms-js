const numbers = [1, 3, 5, 8, 11, 12, 15, 20, 21, 24, 27, 45, 67, 76, 77, 98];

function searchNumber(number) {
  for (let i = 0; i < numbers.length; i++) {
    if (number === numbers[i]) {
      return numbers[i];
    }
  }
  return null;
}

let numberToSearch = 15;
const searchedNumber = searchNumber(numberToSearch);
if (searchedNumber) {
  console.log(`O número ${numberToSearch} foi encontrado dentro da lista`);
} else {
  console.log(`O número ${numberToSearch} não foi encontrado dentro da lista`);
}
