import { calculateBMI } from "../script/calculator"
import { classifyBMI } from "../script/classifyBMI";
import BmiChart from "./graph";

const Results = ( ) => {

    const BMIValue = calculateBMI();
    const classification = classifyBMI(BMIValue);
    
    if (BMIValue){
        return(
            <div className="results">
                <div>
                    <h2>Seu IMC é {BMIValue}</h2>
                    <h3>Um índice que é considerado <span>{classification}</span>. </h3>
                </div>
                <button>Saiba mais</button>
                <BmiChart />
            </div>
        );
    }
}

export default Results;
