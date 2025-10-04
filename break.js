for (let n = 0; n <= 35; n++) {
    console.log(n);

    if (n >=25) {
        break;
    }
    
} 


// continue


for (let num = 50; num >= 20; num--) {
    if (num % 2 !== 0) {
        continue;
    }
    // console.log('even number is:', num);
}

// while loop

let num = 55;
while (num >= 11) {
    num--;
    if (num % 2 !== 0) {
        continue;
    }
    console.log('even number is:', num);
}