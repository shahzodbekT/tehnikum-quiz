import React, { useState } from "react";
import { ProgressIndicator } from "../components/UI/ProgressIndicator";
import { Heading } from "../components/UI/Heading";
import { ListImgItem } from "../components/UI/ListImgItem";
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

const StepThree = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressIndicator currentStep={3} />
          <div className="question">
            <Heading headingTag="h2" headingText="3. Занимательный вопрос" />
            <ul className="emoji-variants">
              {mockData.map((variant) => (
                <ListImgItem
                  key={variant.variantId}
                  itemId={variant.variantId}
                  itemText={variant.variantText}
                  isSelected={selectedItem === variant.variantId}
                  onClick={() => setSelectedItem(variant.variantId)}
                />
              ))}
            </ul>
            <LinkButton path="/step-four" isDisabled={!selectedItem} buttonType="submit" buttonText="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
