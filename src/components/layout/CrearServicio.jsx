import {collection,addDoc} from 'firebase/firestore'
import { dataBase } from '../config/dataBase'
import { useState } from 'react'

const CrearServicio = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [valor, setValor] = useState('')

    const agregarServicio = async () => {
        const servicioCollection = collection(dataBase, 'servicios')
        const servicio = {
            nombre,descripcion,valor
        }
        
        await addDoc(servicioCollection, servicio)
    }

  return (
    <section>
        <form >

            <input onChange={(e)=>setNombre(e.target.value)} placeholder={'nombre del servicio'} type={"text"} />
            <input onChange={(e)=>setDescripcion(e.target.value)} placeholder={'descripcion del ervicio'} type={"text"} />
            <input onChange={(e)=>setValor(e.target.value)} placeholder={'valor del servicio'} type={"text"} />
            <input onClick={agregarServicio} type={"button"} value={'agregar servicio'}/>

        </form>
    </section>
  )
}

export default CrearServicio