import { FiInfo } from "react-icons/fi";

const Header:React.FC = () => {
    return(
        <header id='home'>
            <h1 className="main-title">Calculadora de IMC</h1>
            <div className="d-flex f-row justify-content-center align-items-center">
                <FiInfo />
                <h2 className="home-question">O que é IMC ?</h2>
            </div>
        </header>
    )
}

export default Header;