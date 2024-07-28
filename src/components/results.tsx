import { classifyBMI } from "../script/classifyBMI";
import BmiChart from "./graph";

interface ResultsProps {
    bmi: number;
    gender: string;
}

const Results: React.FC<ResultsProps>  = ({ bmi, gender }) => {

    const classification = classifyBMI(bmi);

    if (bmi){
        return(
            <div className="results" id='results'>
                <div>
                    <h2>Seu IMC é {bmi}</h2>
                    <h3>Um índice que é considerado <span>{classification}</span> para uma pessoa do gênero {gender}. </h3>
                </div>
                <button>Saiba mais</button>
                <BmiChart />
            </div>
        );
    }
}

export default Results;
