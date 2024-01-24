const fizzbuzz = (number?: number) => {
    if (typeof number !== 'number') throw new Error('No es un número')
    if (isNaN(number)) throw new Error('es un NaN');
    let output = '';
    let multiples = { 3: 'Fizz', 5: 'Buzz' };
    Object.entries(multiples).forEach(([multiplier, word]: any) => {
        if (number % multiplier === 0) output += word;
    });
    return output || number;
}
export default fizzbuzz;