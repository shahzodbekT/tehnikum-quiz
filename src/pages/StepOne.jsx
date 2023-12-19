import React from "react";
import { LinkButton } from "../component/LinkButton";
import { ProgressIndicator } from "../component/ProgressIndicator";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressIndicator currentStep={1}/>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <LinkButton path="/step-two"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
