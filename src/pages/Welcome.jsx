import React from "react";
import { Heading } from "../components/UI/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/AppInput";
import StepOne from "./StepOne";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading textValue="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppInput inputLabel="Ваше имя"/>
            <AppInput inputLabel="Ваш номер"/>
            {/* <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
            <AppButton />
          </form>
        </div>
      </div>
      <div>
        <StepOne />
      </div>
    </div>
  );
};

export default Welcome;
