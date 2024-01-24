const santaClausRegalos = (frase?: any, resultado? : any) => {
    if (!frase) throw new Error('Primer parámetro es vacío');
    if (typeof frase != 'string') throw new Error('Primer parámetro no es string');
    if (!resultado) throw new Error('Segundo parámetro es vacío');
    if (typeof resultado != 'string') throw new Error('Segundo parámetro no es string');
    const tieneTamanosIguales = frase.length !== resultado.length 
    if (tieneTamanosIguales) return false;
    const tieneLetrasUnicas = new Set(frase).size === new Set(resultado).size; 
    if (!tieneLetrasUnicas) return false;
    

    return true;
};
export default santaClausRegalos;