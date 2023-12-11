interface InputProps {
    type?: string,
    placeholder?: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
}

const Input = ( { type, placeholder = "Input a value", value, onChange, label = "Label" }: InputProps ) => {



  return (
    <label className="flex flex-col">
      <span className="mb-2 font-semibold">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg p-2"
      />
    </label>
  )
}

export default Input