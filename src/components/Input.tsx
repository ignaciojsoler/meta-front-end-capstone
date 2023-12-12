import { useEffect, useState } from "react";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string | Date | number | null;
    onChangeText?: (text: string) => void;
    label?: string;
    validationFunctions?: ((value: string) => [boolean, string])[];
  }
  
  const Input = ({
    type,
    placeholder = "Input a value",
    value,
    onChangeText,
    label = "Label",
    validationFunctions = [],
  }: InputProps) => {

    const [errorMessages, setErrorMessages] = useState< string[] >([]);
    
    useEffect(() => {
      const errors: string[] = [];
      if (value === null) return;
      validationFunctions.forEach((validationFunction) => {
        const [isValid, errorMessage] = validationFunction(value?.toString() || "");
        if (!isValid) {
          errors.push(errorMessage);
        }
      });
      setErrorMessages(errors);
    }, [value]);

    return (
      <label className="flex flex-col">
        <span className="mb-2 font-semibold">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value?.toString() || ""}
          onChange={(e) => onChangeText && onChangeText(e.target.value)}
          className={`border ${!errorMessages.length || value === null ? "border-gray-300" : "border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"} rounded-lg p-2`}
        />
        {(errorMessages.length > 0 && value !== null) &&  (
          <div>
            {errorMessages.map((message, index) => (
              index === 0 && <span key={index} className="text-red-500 text-sm block pt-1">
              {message}
            </span>
            ))}
          </div>
        )}
      </label>
    );
  };
  
  export default Input;
  