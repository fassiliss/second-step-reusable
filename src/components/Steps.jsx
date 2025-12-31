import { useState } from "react";
import messages from "../data/messages.js";
import WelcomeMessage from "./WelcomeMessage.jsx";
import Button from "./Button.jsx";

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) setStep((s) => s - 1);
    }

    function handleNext() {
        if (step < messages.length) {
            setStep((s) => s + 1);
        }
    }

    function togleOpen() {  
        setIsOpen((is) => !is);
    }


  return (
    <div>
    <button type="button"  className="close" onClick={togleOpen} >
        &times;
    </button>
    {isOpen && (
        <div className="steps">
        <div className="numbers">
            {messages.map((_, i) => (
            <div key={i} className={step >= i + 1 ? "active" : ""}>
                {i + 1}
            </div>
            ))}
        </div>

        <WelcomeMessage>
            <p>This is step {step} of the process.</p>
            <h2>{messages[step - 1]}</h2>
        </WelcomeMessage>

        <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
            <span>👈🏾</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
            Next <span>👉🏾</span>
            </Button>
        </div>
        </div>
    )}

      
    </div>
  );
}

export default Steps;
