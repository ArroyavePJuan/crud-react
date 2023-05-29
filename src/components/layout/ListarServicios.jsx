import {collection, getDocs, doc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { dataBase } from '../config/dataBase'

const ListarServicios = () => {
    const [servicios, setServicios] = useState([])

    const mostrarServicio = async () =>{
        const serviciosCollection = collection(dataBase, 'servicios')
        const data = await getDocs(serviciosCollection)  
        console.log(data.docs)
        setServicios(data.docs.map((doc)=>({...doc.data()})))  
    }
    useEffect(()=>{
        mostrarServicio()
    },[])
  return (
    <section>
        {
        servicios.map((servicio)=>(
            <section>

            <section />    
        )) 
        }
    </section>
  )
}

export default ListarServicios