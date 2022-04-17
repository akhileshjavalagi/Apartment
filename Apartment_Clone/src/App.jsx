import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routers } from './components/Routers'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  

  return (
    <div className="App">
      <ChakraProvider>
      <Routers/>
        </ChakraProvider>
     
    </div>
  )
}

export default App
