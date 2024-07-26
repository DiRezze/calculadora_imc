import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const scrollTo = (sectionId:string) =>{
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
}

const NavLinks: React.FC = () =>{

    const links = [
        { name: 'Início', sectionId: 'home'},
        { name: 'Calculadora', sectionId: 'calculator'},
        { name: 'Informações', sectionId: 'info'},
        { name: 'Referências', sectionId: 'ref'}
    ];

    return(
        <ul>
            {links.map(link=>(
                <li id={link.sectionId} onClick={( ) => scrollTo(link.sectionId)}>
                    {link.name}
                </li>
            ))}
        </ul>

    );

}

const DynamicNav: React.FC = ( ) =>{
    const [viewWidth, setViewWidth] = useState<number>(window.innerWidth);

    useEffect (( )=>{
        const handleResize = ( ) =>{
            setViewWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return ( ) =>{
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return(
        <nav>
            {viewWidth >= 450 ?(
                <>
                    <h1>Calculadora de IMC</h1>
                    <NavLinks />
                </>
            ):(
                <>
                    <button className="dropdown-button">
                        <IoMenu />
                    </button>
                    <NavLinks />
                </>
            )}
        </nav>
    );

}

export default DynamicNav;
