import React, { useEffect, useState } from "react";
import { Heding } from "../component/ui/Heding";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../component/LinkButton";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const navigate = useNavigate();

  const clickHandler = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  useEffect(() => {

  }, [nameValue, phoneValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heding headingText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <Input
              hasError={nameError}
              value={nameValue}
              inputType="text"
              inputLable="Ваше имя"
              id="username"
              inputPlaceholder="Ваш ответ"
              isRequired
              inputError="Введите свое имя"
              onChange={setNameValue}
            />
            <Input
              hasError={phoneError}
              inputLable="Ваш номер"
              inputType="tel"
              id="phone"
              inputPlaceholder="+998 9- --- -- -- "
              inputError="Введите свой номер"
              value={phoneValue}
              onChange={setPhoneValue}
            />

            <LinkButton path="/step-one" onClick={clickHandler} buttonText="Далее" buttonType="submit"/>
            {/* <Button buttonText="Далее" onClick={clickHandler} buttonType="submit" isDisabled={false} /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
