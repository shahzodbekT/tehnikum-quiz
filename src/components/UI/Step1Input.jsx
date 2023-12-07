import React from "react";

export const Step1Input = (props) => {
    return (
        <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder={props.placeHolder}
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
    )
}