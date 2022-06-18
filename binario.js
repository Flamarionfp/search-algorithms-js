const numbers = [1, 3, 5, 8, 11, 12, 15, 20, 21, 24, 27, 45, 67, 76, 77, 98];

function searchNumber(numberToSearch) {
  let indexOfMiddle = numbers.length / 2;
  let middleNumber = numbers[indexOfMiddle];
  if (middleNumber === numberToSearch) {
    return { found: true, index: indexOfMiddle, loops: 0 };
  } else {
    if (numberToSearch < middleNumber) {
      for (let i = 0; i < numbers.length / 2; i++) {
        if (numbers[i] === numberToSearch) {
          return { found: true, index: i, loops: i + 1 };
        }
      }
    } else {
      let loops = 0;
      for (let i = indexOfMiddle; i < numbers.length; i++) {
        loops++;
        if (numbers[i] === numberToSearch) {
          return { found: true, index: i, loops };
        }
      }
    }
  }
  return { found: false };
}

const numberToSearch = 45;
const { found, index, loops } = searchNumber(numberToSearch);
if (found) {
  console.log(
    `O número ${numberToSearch} foi encontrado dentro da lista no índice ${index}`
  );
  if (loops > 0) {
    console.log(
      `Foi passado pelo looping ${loops} vezes até encontrar o número`
    );
  } else {
    console.log(
      "Não foi necessário passar pelo looping, pois o número desejado se encontra no meio da lista"
    );
  }
} else {
  console.log(`O número ${numberToSearch} não foi encontrado dentro da lista`);
}
