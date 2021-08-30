const Manager = require('../lib/Manager');

test('Should set office number via constructor', () => {
    const val = 50;
    const test = new Manager('Foo', 4, 'someone@ex.com', val);
    expect(test.officeNumber).toBe(val);
});

test('Should return "Manager" via getRole()', () => {
    const val = "Manager";
    const test = new Manager('Foo', 4, 'someone@ex.com', 50);
    expect(test.getRole()).toBe(val);
});

test('Should return office number via getOfficNumber()', () => {
    const val = 35;
    const test = new Manager('Foo', 4, 'someone@ex.com', val);
    expect(test.getOfficeNumber()).toBe(val);
});