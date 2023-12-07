import React from "react";
import { AppIndicator } from "../components/UI/AppIndicator";
import { Heading2 } from "../components/UI/Heading2";
import { Step1Input } from "../components/UI/Step1Input";
import { AppButton } from "../components/UI/AppButton";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <AppIndicator />
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Heading2 textValue="1. Занимательный вопрос" />
            <Step1Input placeHolder="Ваш ответ" />
            {/* <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label> */}
            <AppButton />
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
