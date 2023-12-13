import * as validations from './validations';

describe('Validations', () => {
  test('notEmpty', () => {
    expect(validations.notEmpty('')).toStrictEqual([false, 'Value cannot be empty.']);
    expect(validations.notEmpty('Hello')).toStrictEqual([true, 'Value cannot be empty.']);
  });

  test('notSpecialCharacter', () => {
    expect(validations.notSpecialCharacter('John Doe')).toStrictEqual([true, 'Please enter a valid name.']);
    expect(validations.notSpecialCharacter('John@Doe')).toStrictEqual([false, 'Please enter a valid name.']);
  });

  test('minLength', () => {
    const minLength3 = validations.minLength(3);
    expect(minLength3('ab')).toStrictEqual([false, 'Please enter at least 3 characters.']);
    expect(minLength3('abc')).toStrictEqual([true, 'Please enter at least 3 characters.']);
  });

  test('maxLength', () => {
    const maxLength5 = validations.maxLength(5);
    expect(maxLength5('123456')).toStrictEqual([false, 'Please limit your input to 5 characters or less.']);
    expect(maxLength5('12345')).toStrictEqual([true, 'Please limit your input to 5 characters or less.']);
  });

  test('minValue', () => {
    const minValue10 = validations.minValue(10);
    expect(minValue10('5')).toStrictEqual([false, 'Must be at least 10.']);
    expect(minValue10('15')).toStrictEqual([true, 'Must be at least 10.']);
  });

  test('maxValue', () => {
    const maxValue100 = validations.maxValue(100);
    expect(maxValue100('150')).toStrictEqual([false, 'Must be at most 100.']);
    expect(maxValue100('50')).toStrictEqual([true, 'Must be at most 100.']);
  });

  test('isEmail', () => {
    expect(validations.isEmail('invalid-email')).toStrictEqual([false, 'Please enter a valid email.']);
    expect(validations.isEmail('john.doe@example.com')).toStrictEqual([true, 'Please enter a valid email.']);
  });

  test('onlyNumbers', () => {
    expect(validations.onlyNumbers('123abc')).toStrictEqual([false, 'Value must contain only numbers.']);
    expect(validations.onlyNumbers('456')).toStrictEqual([true, 'Value must contain only numbers.']);
  });
});
