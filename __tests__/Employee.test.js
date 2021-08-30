
const Employee = require('../lib/Employee');

test('Should embody Employee instance', () => {
    const test = new Employee();
    expect(typeof(test)).toBe('object');
});

test('Should set name of employee object', () => {
    const name = 'Francis';
    const test = new Employee(name);
    expect(test.name).toBe(name);
});

test('Should set id of employee object', () => {
    const val = 50;
    const test = new Employee('Foo', val);
    expect(test.id).toBe(val);
});

test('Should set email of employee object', () => {
    const testEmail = 'someone@example.com';
    const test = new Employee('Foo', 4, testEmail);
    expect(test.email).toBe(testEmail);
});