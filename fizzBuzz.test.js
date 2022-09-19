const fizzBuzz = require("./fizzBuzz");

describe('fizzBuzz', () => { 
    test('Should print 1 if receive 1', () => { 
        const expected = 1;
        const result = fizzBuzz(1);
        expect(result).toBe(expected);
     });

     test('should print fizz if receive a multiple of 3', () => { 
        const expected = 'fizz';
        const result = fizzBuzz(9);
        expect(result).toBe(expected);
      });

      test('should print buzz if receive a multiple of 5', () => { 
        const expected = 'buzz';
        const result = fizzBuzz(10);
        expect(result).toBe(expected);
      });

      test('should print fizzBuzz if receive a multiple of 3 and 5', () => { 
        const expected = 'fizzBuzz';
        const result = fizzBuzz(30);
        expect(result).toBe(expected);
      });
 });