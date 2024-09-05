import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './componentes/button'

function exibirMensagem() {
  alert('Parabéns agora você é Corinthiano!')
}

function App() {
  
  return (
    <>
        <Button texto ='ver meu time' mensagem={exibirMensagem}/>
    </>
  )
}

export default App
