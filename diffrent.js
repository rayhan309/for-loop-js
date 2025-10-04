// for (let b = 1; b < 40; b++) {
//     if (b % 5 === 0) {
//         console.log('multiples of 5:', b);
//     }
// }


// let a = 0;
// for (let b = 1; b <= 40; b++) {
//     if (b % 5 === 0) {
//         console.log('multiples of 5:', b);
//         a = a + b;
//         // console.log('next number:', a);
//     }
// }

// console.log('totale count:', a);

// while loop

let c = 1;
let d = 0;

while (c <= 40) {
    if (c % 5 === 0) {
        console.log('multiples of 5 using while:', c);
        d = d + c;
        console.log('next number using while:', d);
    }
    c++;
    
    console.log('next c number:', c);
}