import { scrollTo } from "../script/scrollTo";

const Home:React.FC = () => {
    return(
        <section id='home'>
            <h1>Calculadora de IMC</h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="home-question">O que é IMC ?</h2>
                <p>Um texto muito explicativoh que nem vou copiar do ChatGPT</p>
            </div>
            <button 
                onClick={( ) => scrollTo('calculator')} 
                type="button" 
                className="btn btn-primary btn-lg"
            >
                Descubra o seu
            </button>
        </section>
    )
}

export default Home;