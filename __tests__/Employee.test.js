
const Employee = require('../lib/Employee');

test('Should embody Employee instance', () => {
    const test = new Employee();
    expect(typeof(test)).toBe('object');
});

test('Should set name of employee object', () => {
    const n = 'Francis';
    const test = new Employee(n);
    expect(test.name).toBe(n);
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

test('Should return name via getName()', () => {
    const n = 'Francis';
    const test = new Employee(n);
    expect(test.getName()).toBe(n);
});

test('Should return id via getId()', () => {
    const val = 50;
    const test = new Employee('Foo', val);
    expect(test.getId()).toBe(val);
});

test('Should return email via getEmail()', () => {
    const testEmail = 'someone@example.com';
    const test = new Employee('Foo', 4, testEmail);
    expect(test.getEmail()).toBe(testEmail);
});

test('Should return "Employee" via getRole()', () => {
    const value = 'Employee';
    const test = new Employee('Foo', 4, 'someone@example.com');
    expect(test.getRole()).toBe(value);
});