import { FiInfo } from "react-icons/fi";
import { scrollTo } from "../script/scrollTo";

const Header:React.FC = () => {
    return(
        <header id='home'>
            <h1 className="main-title">Calculadora de IMC</h1>
            <div 
                className="d-flex flex-row justify-content-center align-items-center home-question mt-3 mb-3"
                onClick={( ) => scrollTo('info')}
            >
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <FiInfo className="me-2" />
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <h2 className="home-question">O que é IMC ?</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;
