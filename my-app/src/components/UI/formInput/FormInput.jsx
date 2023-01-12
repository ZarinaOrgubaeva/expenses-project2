import "./FormInput.css";
export const FormInput = ({labelName, inputType, id,placeholder,...rest}) => {
  return (
    <div className="container">
      <label htmlFor={id}>{labelName}</label>
      <input
        type={inputType}
        placeholder={placeholder || " "}
        id={id}
        {...rest}
      />
    </div>
  );
};
