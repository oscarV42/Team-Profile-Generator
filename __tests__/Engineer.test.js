const Engineer = require('../lib/Engineer');

test('Should set GitHub username via constructor', () => {
    const testUser = 'GitHub';
    const test = new Engineer('Foo', 4, 'someone@ex.com', testUser);
    expect(test.github).toBe(testUser);
});

test('should return "Engineer" via getRole()', () => {
    const val = 'Engineer';
    const test = new Engineer("Foo", 4, "someone@ex.com", "GitHubUser");
    expect(test.getRole()).toBe(val);
});

test('should return GitHub username via getGithub()', () => {
    const testUser = 'GitHub';
    const test = new Engineer('Foo', 4, 'someone@ex.com', testUser);
    expect(test.getGithub()).toBe(testUser);
});