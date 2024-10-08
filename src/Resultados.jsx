import { useState, useEffect} from "react";
import Item from "./Objeto";
import "./Resultados.css"


const Resultados = ({valueEmoji}) => {

    const [arrayEmojis, setArrayEmojis] = useState([])

    const Busqueda = async (value) => {

        await fetch(`https://emoji-api.com/emojis?access_key=d3a2ffea73ffb1cdf98e4d4c44764eea85a797d5&search=${value}`)
        .then(response => response.json())
        .then(async data => {
             setArrayEmojis(data)
            })
            .catch(error => console.log(error))
        }

    useEffect(() => {
        Busqueda(valueEmoji)
    }, [valueEmoji])
    
    

    return (
        <section className="resultados"> 
                    
            {
                arrayEmojis.length > 0 && arrayEmojis.map((emoji) => (
                    <Item key={emoji.slug} name={emoji.unicodeName} emoji={emoji.character} />
                ))
            }
                        
        </section>
    );

}

export default Resultados;