import { NavLink } from 'react-router-dom'
import { Logo } from '../components/Logo'
import '../styles/Home.scss'
import imgHuellitas from '../assets/imgs/huellitas.png'

export const Home = () => {
    return (
        <div className="Home">
            <Logo />
            <p>
                ¿Como quieres ingresar tu urgencia?
            </p>

            <div className="Home-buttons">
                <button>
                    <NavLink to='/Audio'>
                        Audio

                    </NavLink>
                </button>
                <button>
                    <NavLink to='/Texto'>
                        Texto

                    </NavLink>
                </button>
                <button>
                    <NavLink to='/raza'>

                        Interactiva
                    </NavLink>
                </button>
            </div>
            <div className='Home-img'>

                <img src={imgHuellitas} alt="" />
            </div>

        </div>
    )
}
