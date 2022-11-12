import { Link, useParams } from "react-router-dom"
import { Logo } from "../components/Logo"

import { useFetch } from "../hooks/useFetch"
import '../styles/Diagnostico.scss'

export const Diagnostico = () => {
    const { sintoma } = useParams()
    const data = useFetch('diagnoticos')
    let diagnostico = data[sintoma]

    return (
        <section className="Diagnostico">
            <Logo />
            <div className="Diagnostico-recomendaciones">
                <h2>Recomendaciones</h2>
                <p>{diagnostico}</p>
            </div>
            <div className="Diagnostico-map">
                <p>Comuniquese con la veterinaria mas cercana</p>
                <button>
                    Encontrar
                </button>
                <p><Link to='/'>Volver</Link>  </p>
            </div>
        </section>
    )
}
