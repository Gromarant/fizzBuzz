const fizzBuzz = (num) => {
    const multipleOf = (num, divisor) => num % divisor === 0;
    
    if( typeof num !== 'number') {
        return 'Error: the argument must be a number';
    }
    if( num === 0 ) {
        return num;
    }
    if( multipleOf( num, 3 ) && multipleOf(num, 5)) {
        return 'fizzBuzz';
    }
    if( multipleOf( num, 3 )) {
        return 'fizz';
    }
    if( multipleOf( num, 5 )) {
        return 'buzz';
    }
    return num;
};

const print = (num) => {
    for( let i=0; i<= num; i++) {
        console.log( `${i}: ${fizzBuzz(i)}`);
    }
}

print(100);

module.exports = fizzBuzz;