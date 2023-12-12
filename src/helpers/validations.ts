export const notEmpty = (value: string): [boolean, string] => {
  return [value.trim().length > 0, "Value cannot be empty."];
};

export const notSpecialCharacter = (value: string): [boolean, string] => {
  const regex = /^[a-zA-Z\s'-]*$/;
  return [regex.test(value), "Please enter a valid name."];
};

export const minLength =
  (num: number) =>
  (value: string): [boolean, string] => {
    return [
      value.trim().length >= num,
      `Please enter at least ${num} characters.`,
    ];
  };

export const maxLength =
  (num: number) =>
  (value: string): [boolean, string] => {
    return [
      value.trim().length <= num,
      `Please limit your input to ${num} characters or less.`,
    ];
  };

  export const minValue = (num: number) => (value: string): [boolean, string] => {
    return [Number(value) >= num, `Must be at least ${num}.`];
  };

  export const maxValue = (num: number) => (value: string): [boolean, string] => {
    return [Number(value) <= num, `Must be at most ${num}.`];
  }

export const isEmail = (value: string): [boolean, string] => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return [emailRegex.test(value), "Please enter a valid email."];
};

export const onlyNumbers = (value: string): [boolean, string] => {
  const onlyNumbersRegex = /^[0-9]+$/;
  return [onlyNumbersRegex.test(value), "Value must contain only numbers"];
}
