import { FaGithub } from "react-icons/fa"

const Footer = () =>{
    <footer>
        <a href="https://github.com/DiRezze" target="_blank" title="Meu perfil no GitHub">
            <div className="d-flex f-row">
                <FaGithub />
                <span>@DiRezze on GitHub</span>
            </div>
        </a>
    </footer>
}

export default Footer;
