const parimpar = (value: any) => {
    if (typeof value != 'number') throw new Error('No es un número value');
    return (value % 2 == 0) ? 'par' : 'impar';
}

describe('Par o impar function', () => {
    it('parimpar function es una function', () => {
        expect(typeof parimpar == 'function').toBe(true);
    })
    it('error si el parámetro no es numero', () => {
        expect(() => parimpar('a')).toThrow('No es un número value');
    })
    it('cuando el valor sea 1 la respuesta debe ser impar', () => {
        expect(parimpar(1)).toBe('impar');
    })
    it('cuando el valor sea 2 la respuesta debe ser par', () => {
        expect(parimpar(2)).toBe('par');
    })
    it('cuando el valor sea 3 la respuesta debe ser impar', () => {
        expect(parimpar(3)).toBe('impar');
    })
});