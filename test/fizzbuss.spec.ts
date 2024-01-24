import fizzbuzz from "../src/functions/fizzbuzz";

describe('fizzbuzz', () => {
    // it('should be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function');
    // });
    it('should throw if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow('No es un número');
    })
    it('should throw if not number is provided as NaN', () => {
        expect(() => fizzbuzz(NaN)).toThrow('es un NaN');
    })
    it('esperamos que cuando sea 1  el resultado sea 1', () => {
        expect(fizzbuzz(1)).toBe(1);
    });
    it('esperamos que cuando sea 2  el resultado sea 2', () => {
        expect(fizzbuzz(2)).toBe(2);
    });
    it('esperamos que cuando sea multiplo de 3  el resultado sea fizz', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(6)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
        expect(fizzbuzz(12)).toBe('Fizz');
        // expect(fizzbuzz(15)).toBe('Fizz');
    });
    // it('esperamos que cuando sea 4  el resultado sea 4', () => {
    //     expect(fizzbuzz(4)).toBe(4);
    // });

    it('esperamos que cuando sea 5  el resultado sea 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(10)).toBe('Buzz');
        // expect(fizzbuzz(15)).toBe('Buzz');
        expect(fizzbuzz(20)).toBe('Buzz');
    });
    it('esperamos que cuando sea multiplo de 3 y de 5  el resultado sea FizzBuzz', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
        expect(fizzbuzz(45)).toBe('FizzBuzz');
        expect(fizzbuzz(60)).toBe('FizzBuzz');
    });
})