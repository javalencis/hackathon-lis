import { Link } from "react-router-dom"
import { Logo } from "../components/Logo"
import { useFetch } from "../hooks/useFetch"
import '../styles/Sintomas.scss'
export const Sintomas = () => {

    const sintomas = useFetch('sintomas')

    return (
        <section className="Sintomas">
            <Logo />
            <p>¿Cuales son los sintomas?</p>
            <nav className="Sintomas-nav">
                <ul className="nav-list_sintomas">
                    {
                        sintomas?.map(sintoma => (

                            <li><Link to={'/diagnostico/'+sintoma}>{sintoma}</Link></li>

                        ))
                    }

                
                </ul>
            </nav>

        </section>
    )
}
