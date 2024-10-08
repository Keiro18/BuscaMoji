import { useState } from "react"

const Form = ({setValueEmoji}) => {

    const [value, setValue]= useState('')
    const handleSearch = (e) => {
        setValueEmoji(value)
        e.preventDefault()

    }
    return ( 
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Ingresa una palabra relacionada con tu emoji"
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
     );
}
 
export default Form;