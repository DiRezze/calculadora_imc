import { scrollTo } from "../script/scrollTo";

const Information = ( ) =>{
    return(
        <section id='info' className="info">
            <h2 className="info-main-title">Informações</h2>
            <div className=" d-flex flex-row">
                
                <div className="d-flex flex-column justify-content-start align-itens-center info-card">
                    <h3 className="info-title">O que é IMC?</h3>
                    <p>
                        O Índice de Massa Corporal (IMC) é uma ferramenta amplamente utilizada para avaliar a quantidade de tecido corporal em relação à altura de uma pessoa. O IMC ajuda a classificar o peso de um indivíduo dentro de diferentes faixas, permitindo uma avaliação geral do estado nutricional e da saúde.
                    </p>
                    <button 
                    onClick={( ) => scrollTo('calculator')} 
                    type="button" 
                    className="btn btn-primary btn-lg"
                >
                    Descubra o seu
                </button>
                </div>
                <div className="d-flex flex-column justify-content-start align-itens-center info-card">
                    <h3 className="info-title">IMC não é tudo</h3>
                    <p>
                        Embora o IMC seja uma medida prática e fácil de calcular, ele não leva em consideração a composição corporal, como a quantidade de massa muscular versus gordura. Portanto, pode não refletir com precisão a saúde de todos os indivíduos, especialmente aqueles com composição corporal atípica. Inclusive praticantes de atividades física plenamente saudáveis.
                    </p>
                    <button 
                    onClick={( ) => scrollTo('calculator')} 
                    type="button" 
                    className="btn btn-primary btn-lg"
                >
                    Descubra o seu
                </button>
                </div>
            </div>
        </section>
    )
} 

export default Information;
