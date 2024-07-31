import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { scrollTo } from "../script/scrollTo";
import { FaCalculator } from "react-icons/fa";


const NavLinks: React.FC = () =>{

    const links = [
        { name: 'Início', sectionId: 'home'},
        { name: 'Calculadora', sectionId: 'calculator'},
        { name: 'Informações', sectionId: 'info'},
    ];

    return(
        <ul className="navbar-nav custom-nav me-auto mb-2 mb-lg-0">
            {links.map(link=>(
                <li key={link.sectionId} onClick={( ) => scrollTo(link.sectionId)} className="nav-item ms-3">
                    <span className="nav-link">
                        {link.name}
                    </span>
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
        <nav className="nav-container">
            <div className="nav-fluid">
                {viewWidth >= 450 ?(
                    <>
                        <FaCalculator className="ms-3 me-3" />
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
            </div>
        </nav>

    );

}

export default DynamicNav;
