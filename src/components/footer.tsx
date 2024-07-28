import { FaGithub } from "react-icons/fa"

const Footer = () =>{
    return(
        <footer>
            <div className="footer-info d-flex">
                <a href="https://github.com/DiRezze" target="_blank" title="Meu perfil no GitHub">
                    <div className="github-link d-flex">
                        <FaGithub />
                        <span>@DiRezze on GitHub</span>
                    </div>
                </a>
                <span>
                © 2024 Todos os direitos reservados.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
