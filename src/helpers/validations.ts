export const notEmpty = (value: string): [boolean, string] => {
    return [value.trim().length > 0, "Value cannot be empty."];
};

export const isEmail = (value: string): [boolean, string] => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return [
      emailRegex.test(value),
      "Please enter a valid email.",
    ];
};

