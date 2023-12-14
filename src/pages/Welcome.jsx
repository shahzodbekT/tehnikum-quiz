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
          <Heading Headingtype="h1" headingText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppInput inputType="text" 
             inputLabel="Ваше имя"
             id="username"
             inputPlaceholder="Ваш ответ"
             isRequired={true}
             inputErr="Введите номер"/>
            <AppInput inputLabel="Ваш номер" 
             inputType="tel"
             id="usernumber"
             inputPlaceholder="+998 9- --- -- --"
            />
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
            <AppButton buttonType="submit" isDisabled={true}/>
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
