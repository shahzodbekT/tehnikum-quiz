import React from "react";

export const Input = ({
  inputLable,
  isRequired,
  inputType,
  id,
  inputPlaceholder,
  inputError,
  value,
  hasError,
  onChange,
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
      {inputLable}
      <input
        required={isRequired}
        type={inputType ?? "text"}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {hasError && (
      <span id="error-message">
        {' '}
        {inputError}
        {' '}
      </span>
      )}
    </label>
  );
};
