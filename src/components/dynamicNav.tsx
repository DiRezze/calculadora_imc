import React, {useState, useEffect} from "react";
import { IoMenu } from "react-icons/io5";

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
            {viewWidth >= 350 ?(
                <>
                    <h1>Calculadora de IMC</h1>
                    <ul>
                        <li>Início</li>
                        <li>Calculadora</li>
                        <li>Informações</li>
                        <li>Referências</li>
                    </ul>
                </>
            ):(
                <button>
                    <IoMenu />
                </button>
            )}
        </nav>
    );

}

export default DynamicNav;