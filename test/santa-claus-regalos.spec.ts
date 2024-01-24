import santaClausRegalos from "../src/functions/santa-clasus"

describe('La caja de regalos de santa Claus', () => {
    it('caja de regalos es una función', () => {
        expect(typeof santaClausRegalos == 'function').toBe(true)
    });
    it('Primer parámetro es vacío', () => {
        expect(() => santaClausRegalos()).toThrow('Primer parámetro es vacío')
    });
    it('Primer parámetro es string', () => {
        expect(() => santaClausRegalos(1)).toThrow('Primer parámetro no es string')
    });
    it('Segundo parámetro es string', () => {
        expect(() => santaClausRegalos('A', 1)).toThrow('Segundo parámetro no es string')
    });
    it('debe retornar un booleano', () => {
        expect(santaClausRegalos('A', 'B')).toEqual(expect.any(Boolean));
    });
    it('retorna falso cuando la Longitud de los parámetros debe ser igual', () => {
        expect(santaClausRegalos('A', 'BCB')).toBe(false);
    });
    it('retorna false cuando la cantidad de letras únicas de cada parámetro debe ser iguales', () => {
        expect(santaClausRegalos('ABC', 'DDD')).toBe(false);
    });
    // it('retorna false cuando los strings tienen diferente orden de transformación', () => {
    //     expect(santaClausRegalos('XBOX', 'XXBO')).toBe(false);
    // });
})