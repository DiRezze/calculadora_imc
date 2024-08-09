import { classifyBMI } from "../script/classifyBMI";
import { scrollTo } from "../script/scrollTo";

interface ResultsProps {
    bmi: number;
    gender: string;
    weight: number;
}

const Results: React.FC<ResultsProps>  = ({ bmi, gender }) => {

    const classification = classifyBMI(bmi);

    if (bmi){
        return(
            <div className="d-flex flex-column align-center justify-content-center results mt-4" id='results'>
                <div className="d-flex flex-column align-center justify-content-center">
                    <h2>Seu IMC é:</h2>
                    <h1>{bmi}</h1>
                    <h3>Um índice que é considerado <span>{classification}</span> para uma pessoa do gênero {gender}. </h3>
                </div>
                <button onClick={() => scrollTo('info')}>Saiba mais</button>
            </div>
        );
    }
}

export default Results;
