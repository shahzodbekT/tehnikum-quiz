import React, { useState } from "react";
import { ProgressIndicator } from "../components/UI/ProgressIndicator";
import { Heading } from "../components/UI/Heading";
import { ListTextItem } from "../components/UI/ListTextItem";
import { LinkButton } from "../components/UI/LinkButton";

const mockData = [
  {
    variantId: "variant-1",
    variantText: "Ответ 1",
  },
  {
    variantId: "variant-2",
    variantText: "Ответ 2",
  },
  {
    variantId: "variant-3",
    variantText: "Ответ 3",
  },
  {
    variantId: "variant-4",
    variantText: "Ответ 4",
  },
];

const StepTwo = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressIndicator currentStep={2}/>
          <div className="question">
            <Heading headingTag="h2" headingText="Вопрос номер 2" />
            <ul className="variants">
              {mockData.map((variant) => (
                <ListTextItem
                  key={variant.variantId}
                  itemId={variant.variantId}
                  itemText={variant.variantText}
                  isSelected={selectedItem === variant.variantId}
                  onClick={() => setSelectedItem(variant.variantId)}
                />
              ))}
            </ul>
            <LinkButton path="/step-three" isDisabled={!selectedItem} buttonType="submit" buttonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;