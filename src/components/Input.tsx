import { useEffect, useState } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string | Date | number | null;
  onChangeText?: (text: string) => void;
  label?: string;
  validationFunctions?: ((value: string) => [boolean, string])[];
  options?: string[];
}

const Input = ({
  type,
  placeholder,
  value,
  onChangeText,
  label = "Label",
  validationFunctions = [],
  options,
}: InputProps) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  useEffect(() => {
    const errors: string[] = [];
    if (value === null) return;
    validationFunctions.forEach((validationFunction) => {
      const [isValid, errorMessage] = validationFunction(
        value?.toString() || ""
      );
      if (!isValid) {
        errors.push(errorMessage);
      }
    });
    setErrorMessages(errors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <label className="flex flex-col">
      <span className="mb-2 font-semibold">{label}</span>
      {type !== "select" ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value?.toString() || ""}
          onChange={(e) => onChangeText && onChangeText(e.target.value)}
          className={`border ${
            !errorMessages.length || value === null
              ? "border-gray-300"
              : "border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          } rounded-lg p-2`}
        />
      ) : (
        <select
          className="border border-gray-300 rounded-lg p-2"
          onChange={(e) => onChangeText && onChangeText(e.target.value)}
          value={value?.toString() || ""}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {errorMessages.length > 0 && value !== null && (
        <div>
          {errorMessages.map(
            (message, index) =>
              index === 0 && (
                <span key={index} className="text-red-500 text-sm block pt-1">
                  {message}
                </span>
              )
          )}
        </div>
      )}
    </label>
  );
};

export default Input;
