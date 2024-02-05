//FizzBuzz Program Logic

for (i = 0; i < 50; i++) {
    if (i % 2 === 0 && i % 4 === 0) {
        console.log('fizzbuzz');
    } else if (i % 2 === 0 && i % 4 !== 0 ) {
        console.log('fizz');
    } else if (i % 4 === 0 && i % 2 !== 0 ) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}