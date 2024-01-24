import { AutoComplete } from "antd";

export const Input = ({ label, type, id, placeholder, name }) => {
  return (
    <div>
      <label htmlFor={id} className="formbold-form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="formbold-form-input"
      />
    </div>
  );
};

export const Select = ({ label, id, options, name }) => {
  return (
    <div>
      <label htmlFor={id} className="formbold-form-label">
        {label}
      </label>
      <select name={name} id={id} className="formbold-form-input">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
