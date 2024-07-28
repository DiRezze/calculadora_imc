import { calculateBMI } from "../script/calculator"
import BmiChart from "./graph";

const Results = ( ) => {
    const BMIValue = calculateBMI();
    if (BMIValue){
        return(
            <div className="results">
                <div>
                    <h2>Seu IMC é {BMIValue}</h2>
                    <h3>Um índice que é considerado <span>CLASSIFICAÇÃO</span>. </h3>
                </div>
                <button>Saiba mais</button>
                <BmiChart />
            </div>
        );
    }
}

export default Results;
