import { Link } from "react-router-dom"
import { Logo } from "../components/Logo"
import '../styles/Edad.scss'
import imgPerro from '../assets/imgs/perro-cafe.png'
export const Edad = () => {
  return (
    <section className="Edad">
      <Logo />
      <p>¿Cual es la edad? </p>
      <nav className="Edad-nav">
        <ul className="nav--list_sintomas">
          <li> <Link to='/sintomas'>Mayor a 6 años</Link></li>
          <li> <Link to='/sintomas'>Entre 1 a 6 años</Link> </li>
          <li> <Link to='/sintomas'>Menor a 1 año</Link></li>
        </ul>
      </nav>
      <div className="Edad-img">

        <img src={imgPerro} alt="imagen perro cafe" />
      </div>
    </section>
  )
}
