import { useState } from "react";
import Accordion from "./Accordion";
import "./index-1.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className="buttons">
            <Button
              text="Previous"
              onClick={handlePrevious}
              textColor="#fff"
              bgColor="#7950f2"
            />
            <Button
              text="Next"
              onClick={handleNext}
              textColor="#fff"
              bgColor="#7950f2"
            />
          </div>
        </div>
      )}
      <Accordion />
    </>
  );
}

 function Button({ text, onClick, textColor, bgColor }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>STEP {step}</h3>
      <p>{children}</p>
    </div>
  );
}
