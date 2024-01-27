import React from "react";
import { ProgressIndicator } from "../components/UI/ProgressIndicator";
import { LinkButton } from "../components/UI/LinkButton";

const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressIndicator currentStep={4} />
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li>
            </ul>
            <LinkButton path="/thanks" isDisabled={false}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
