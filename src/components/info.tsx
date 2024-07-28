import { scrollTo } from "../script/scrollTo";

const Information = ( ) =>{
    return(
        <section id='info'>
            <h2>Informações</h2>
            <div>
                <h3>O que é IMC?</h3>
                <p>
                    Um texto muito original e explicativo que com certeza não vou copiar do ChatGPT.
                </p>
                <button 
                onClick={( ) => scrollTo('calculator')} 
                type="button" 
                className="btn btn-primary btn-lg"
            >
                Descubra o seu
            </button>
            </div>
        </section>
    )
} 

export default Information;
