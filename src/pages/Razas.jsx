import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useFetch } from '../hooks/useFetch'
import '../styles/Razas.scss'

const url = 'http://192.168.98.122:3000/razas'
export const Razas = () => {

  const razas = useFetch('razas')

  return (
    <section className='Razas'>
      <Logo />
      <p>¿Raza de la mascota?</p>
      <nav className='Razas-nav'>
        <ul className='nav--list'>
          {
            razas.map(raza => (
              <li key={raza} ><Link to='/edad' >{raza}</Link></li>
            ))
          }   
         
        </ul>
      </nav>
    </section>
  )
}
