const { calcularTotal } = require('./app');

test('Calcula correctamente el precio de las entradas', () => {
    expect(calcularTotal(20, 3)).toBe(60);
});

test('Calcula correctamente una sola entrada', () => {
    expect(calcularTotal(20, 1)).toBe(20);
});