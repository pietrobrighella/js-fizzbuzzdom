for (let i = 1; i <= 100; i++){
    if (i % 3 == Number.isSafeInteger(true) && i % 5 == Number.isSafeInteger(true)){
        console.log('FizzBuzz');
    } else if (i % 3 == Number.isSafeInteger(true)){
        console.log('Fizz');
    } else if (i % 5 == Number.isSafeInteger(true)){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}