import React from "react";

export const AppInput = ({inputLabel, isRequired, inputType, id, inputPlaceholder, inputErr, value, hasErr}) => {
  return (
    <label className={`input-wrapper ${hasErr&&"_error"}`} htmlFor={id}>
      {inputLabel}
      <input
        required={isRequired}
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        value={value}
      />
      <span id="error-message">
        {inputErr}
      </span>
    </label>
  );
};
