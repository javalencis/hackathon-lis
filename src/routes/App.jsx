import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Diagnostico } from "../pages/Diagnostico"
import { Edad } from "../pages/Edad"

import { Home } from "../pages/Home"
import { Razas } from "../pages/Razas"
import { Sintomas } from "../pages/Sintomas"


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/raza' element={<Razas/>} />
          <Route path='/edad' element={<Edad/>} />
          <Route path='/sintomas' element={<Sintomas/>} />
          <Route path='/diagnostico/:sintoma' element={<Diagnostico/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
