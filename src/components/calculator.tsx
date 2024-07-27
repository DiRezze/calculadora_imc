import React from "react";
import sideImage from "../assets/sideImage.svg"

const CalculatorApp: React.FC = () =>{
    return(
        <section id="calculator">
            <div className="d-flex calculator-container">
                <div className="side-image-container">
                    <img src={sideImage} />
                </div>
                <div className="form-container">
                    <form>
                        <div>
                            <div className="form-floating mb-3 w-100">
                                <input type="number" className="form-control calculator-text" id="heightInput" placeholder="Ex.: 180cm" />
                                <label htmlFor="floatingInput">Altura (Centímetros)</label>
                            </div>
                            <div className="form-floating mb-3 d-flex w-100">
                                <input type="number" className="form-control calculator-text" id="weightInput" placeholder="Ex.: 70Kg" />
                                <label htmlFor="floatingInput">Peso (Em Kg)</label>
                            </div>
                        </div>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioGender" id="radioMasc" />
                                <label className="form-check-label" htmlFor="radioMasc">
                                    Masculino
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioGender" id="radioFem" />
                                <label className="form-check-label" htmlFor="radioFem">
                                    Feminino
                                </label>
                            </div>
                        </div>
                        <hr />
                        <button 
                            type="submit" 
                            id="calculatorSubmit" 
                            className="btn btn-primary btn-lg"
                        >
                            Calcular
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CalculatorApp;
