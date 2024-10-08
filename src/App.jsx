import { useState } from 'react'
import './App.css'
import Header from './Header'
import Form from './Form'
import Resultados from './Resultados'

function App() {
  const [valueEmoji, setValueEmoji ] = useState('')

  return (
    <>
      <Header />
      <Form setValueEmoji={setValueEmoji}/>
      <h2>Resultados</h2>
      <Resultados valueEmoji={valueEmoji}/>
    </>
  )
}

export default App
