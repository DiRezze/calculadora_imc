import { FaGithub } from "react-icons/fa"

const Footer = () =>{
    return(
        <footer className="d-flex f-row">
            <a href="https://github.com/DiRezze" target="_blank" title="Meu perfil no GitHub">
                <div className="d-flex f-row">
                    <FaGithub />
                    <span>@DiRezze on GitHub</span>
                </div>
            </a>
            <span> | </span>
            <span>
            © 2024 Todos os direitos reservados.
            </span>
        </footer>
    );
}

export default Footer
