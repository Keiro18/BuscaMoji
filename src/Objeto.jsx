import Resultados from "./Resultados";
import './Objeto.css'


const Item = ({name, emoji}) => {
    return ( 
        
        <>
        <article className="item">
            <p className="emoji">{emoji}</p>
            <h4>{name}</h4>
        </article>
        </>
     );
}
 
export default Item;