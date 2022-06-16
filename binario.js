const numbers = [1, 3, 5, 8, 11, 12, 15, 20, 21, 24, 27, 45, 67, 76, 77, 98];

function searchNumber(numberToSearch) {
  let indexOfMiddle = numbers.length / 2;
  let middleNumber = numbers[indexOfMiddle];
  if (middleNumber === numberToSearch) {
    return middleNumber;
  } else {
    if (numberToSearch < middleNumber) {
      for (let i = 0; i < numbers.length / 2; i++) {
        if (numbers[i] === numberToSearch) {
          return numbers[i];
        }
      }
    } else {
      for (let i = indexOfMiddle; i < numbers.length; i++) {
        if (numbers[i] === numberToSearch) {
          return numbers[i];
        }
      }
    }
  }
}

const numberToSearch = 10;
const searchedNumber = searchNumber(numberToSearch);
if (searchedNumber) {
  console.log(`O número ${numberToSearch} foi encontrado dentro da lista`);
} else {
  console.log(`O número ${numberToSearch} não foi encontrado dentro da lista`);
}
