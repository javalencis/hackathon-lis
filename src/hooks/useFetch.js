import { useEffect, useState } from "react"

const url = 'http://192.168.98.122:3000/razas'
const urlS = 'http://192.168.98.122:3000/sintomas'
const urlD = 'http://192.168.98.122:3000/diagnosticos'

export const useFetch = (tipo) => {
    const [data, setData] = useState([])

    const getRazas = async() => {
        const res = await fetch(url)
        const data = await res.json()
        setData(data.razas)
    }   
    const getDiagnosticos = async() => {
        const res = await fetch(urlD)
        const data = await res.json()
        setData(data.diagnosticos)

    }   
    const getSintomas= async() => {
        const res = await fetch(urlS)
        const data = await res.json()
        setData(data.sintomas)
    }   


    useEffect(()=>{
        if(tipo === 'razas'){
            getRazas()
        }else if(tipo==='sintomas'){
            getSintomas()
        }else if(tipo === 'diagnoticos'){
            getDiagnosticos()
        }

    },[])


    return data


}