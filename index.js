'use strict'
//1. Задача про ітерацію
function iterativeOddSumTo(number) {

    let sum = 0;

    for (let i = 1; i <= number; i++) {
        if (i % 2) {
            sum +=i
        }
    }
    return sum;
    };
    
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(9)) // 25
    console.log(iterativeOddSumTo(10)) // 25

//2. Задача про рекурсію


// function iterativeOddSumTo(number) {
//     if (number <= 0) {
//         return 0;
//     } if (number % 2) {
//         return number + iterativeOddSumTo(number - 1);
//     } else {
//         return iterativeOddSumTo(number - 1);
//     }
// }
    
//     console.log(iterativeOddSumTo(1)) // 1
//     console.log(iterativeOddSumTo(9)) // 25
//     console.log(iterativeOddSumTo(10)) // 25