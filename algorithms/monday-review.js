const numbers = [5, 10, 15, 20];

let total = 0;

for (const number of numbers) {
    total += number;
}

console.log("Toplam:", total);


const scores = [12,45,7,89,34];

let biggest = scores[0];

for(const score of scores) {
    if (score > biggest) {
        biggest = score;
    }
}
console.log("En büyük sayı;", biggest);


function sumArray(numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }
    return total;
}

function findBiggestNumber(numbers) {

    let biggest = numbers[0]

    for (const number of numbers) {
        if (number > biggest) {
            biggest = number;
        }
    }
    return biggest;
}
console.log("Toplam:", sumArray([5, 10, 15, 20]));
console.log("En büyük sayı:", findBiggestNumber([12, 45, 7, 89, 34]));