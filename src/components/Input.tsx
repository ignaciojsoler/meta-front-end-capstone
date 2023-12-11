import { useEffect } from "react";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string | null;
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

    const validationResults = validationFunctions.map((fn) => fn(value || ""));
    const isValid = validationResults.every(([isValid]) => isValid);
    const errorMessages = validationResults.map(([, message]) => message).filter(Boolean);


    useEffect(() => {
        console.log(value);
    }, [value])

    return (
      <label className="flex flex-col">
        <span className="mb-2 font-semibold">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value || ""}
          onChange={(e) => onChangeText && onChangeText(e.target.value)}
          className={`border ${isValid || value === null ? "border-gray-300" : "border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"} rounded-lg p-2`}
        />
        {(!isValid && value) &&  (
          <div>
            {errorMessages.map((message, index) => (
              <span key={index} className="text-red-500 text-sm block pt-1">
                {message}
              </span>
            ))}
          </div>
        )}
      </label>
    );
  };
  
  export default Input;
  