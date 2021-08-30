const Intern = require('../lib/Intern');

test('Can set Intern class school key value via constructor', () => {
    const testVal = 'GT';
    const test = new Intern('Foo', 4, 'someone@ex.com', testVal);
    expect(test.school).toBe(testVal);
});

test('Should return "Intern" via getRole()', () => {
    const val = 'Intern';
    const test = new Intern('Foo', 4, 'someone@ex.com', 'GT');
    expect(test.getRole()).toBe(val);
});

test("Should return Intern's school via getSchool()", () => {
    const val = 'GT';
    const test = new Intern('Foo', 4, 'someone@ex.com', val);
    expect(test.getSchool()).toBe(val);
});