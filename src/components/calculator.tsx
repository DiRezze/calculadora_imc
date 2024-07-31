import React, { useRef, useState } from "react";
import sideImage from "../assets/sideImage.svg"
import Results from "./results";
import { calculateBMI, getValue } from "../script/calculator";

const CalculatorApp: React.FC = () =>{

    const [bmi, setBmi] = useState<number|null>(null);
    const [weight, setWeight] = useState<number>(1.50);
    const [gender, setGender] = useState<string>('');
    const resultsRef = useRef<HTMLDivElement>(null);

    const handleCalculate = (e: React.MouseEvent<HTMLButtonElement>) =>{

        e.preventDefault();

        const selectedGender = document.querySelector('input[name="radioGender"]:checked') as HTMLInputElement;
        const genderValue = selectedGender ? selectedGender.id : '';

        const calculatedBmi = calculateBMI();
        const userWeight = getValue('heightInput');

        if(userWeight){
            setWeight(userWeight);
        }

        setBmi(calculatedBmi);
        setGender(genderValue === 'radioMasc' ? 'Masculino' : 'Feminino');

        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        
    }

    return(
        <section id="calculator" className="mt-4">
            <div className="d-flex calculator-container flex-row flex-wrap align-itens-center justify-content-space-between">
                <div className="side-image-container">
                    <img src={sideImage} />
                </div>
                <div className="d-flex flex-column justify-content-center align-itens-center flex-wrap form-container">
                    <form>
                        <div className="d-flex flex-column align-itens-center justify-content-center">

                            <div>
                                <div className="form-floating mb-3 w-100 ">
                                    <input 
                                        type="number" 
                                        className="form-control calculator-text" 
                                        id="heightInput" 
                                        placeholder="Ex.: 1.80m" 
                                        step={0.001} 
                                        min={0.001}
                                    />
                                    <label htmlFor="floatingInput">Altura (Metros)</label>
                                </div>
                                <div className="form-floating mb-3 d-flex w-100">
                                    <input 
                                        type="number" 
                                        className="form-control calculator-text" 
                                        id="weightInput" 
                                        placeholder="Ex.: 70Kg"
                                        step={0.001} 
                                        min={0}
                                    />
                                    <label htmlFor="floatingInput">Peso (Em Kg)</label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-itens-center justify-content-left flex-wrap">
                                <div className="form-check ms-2">
                                    <input className="form-check-input" type="radio" name="radioGender" id="radioMasc" />
                                    <label className="form-check-label" htmlFor="radioMasc">
                                        Masculino
                                    </label>
                                </div>
                                <div className="form-check ms-2">
                                    <input className="form-check-input" type="radio" name="radioGender" id="radioFem" />
                                    <label className="form-check-label" htmlFor="radioFem">
                                        Feminino
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <button 
                                id="calculatorSubmit" 
                                className="btn btn-primary btn-lg submit-calculator"
                                onClick={handleCalculate}
                            >
                                Calcular
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div ref={resultsRef}>
                {bmi !== null && <Results bmi={bmi} gender={gender} weight={weight} />}
            </div>
        </section>
    )
}

export default CalculatorApp;
