describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);
  });
});

describe('Primitive values', () => {
  it('should test jest assertions with object', () => {
    const person = { name: 'Emanuel', age: 26 };
    const anotherPerson = { name: 'juliana', age: 17 };

    expect(person).not.toEqual(anotherPerson);
    expect(person.age).toBeGreaterThanOrEqual(anotherPerson.age);
    expect(person).toHaveProperty('name');
  });
});
