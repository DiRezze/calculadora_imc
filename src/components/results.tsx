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
            <div className="results d-flex flex-column justify-content-center align-itens-center" id='results'>
                <div className="">
                    <h2>Seu IMC é {bmi}</h2>
                    <h3>Um índice que é considerado <span>{classification}</span> para uma pessoa do gênero {gender}. </h3>
                </div>
                <button 
                    onClick={()=>scrollTo('info')}
                    className="btn btn-primary"
                >
                    Saiba mais
                </button>
            </div>
        );
    }
}

export default Results;
