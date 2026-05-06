import { useState,useEffect } from 'react'

import './index.css'

import InputTarea from './components/InputTarea'
import ListaTareas from './components/ListaTareas'

function App() {
  // Cargar tareas desde localStorage al iniciar la aplicación
  const [tareas, setTareas] = useState(()=> {
    const tareasGuardadas = localStorage.getItem("tareas")
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
  })

  const [nuevaTarea, setNuevaTarea] = useState("")

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = () => {
    const nueva = {
      texto: nuevaTarea,
      completada: false
    }

    setTareas([...tareas, nueva])
    setNuevaTarea("")
  }

  const eliminarTarea = (indexAEliminar) => {
    const nuevasTareas = tareas.filter((_, index) => index !== indexAEliminar)
    setTareas(nuevasTareas)
  }

  const toggleCompletada = (index) => {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === index) {
        return {
          ...tarea,
          completada: !tarea.completada
        }
      }
      return tarea
    })

    setTareas(nuevasTareas)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Mi app de tareas</h1>

      <div className='bg-white p-4 rounded-xl shadow w-full max-w-md'>
        <InputTarea
          nuevaTarea={nuevaTarea}
          setNuevaTarea={setNuevaTarea}
          agregarTarea={agregarTarea}
        />

        <ListaTareas
          tareas={tareas}
          toggleCompletada={toggleCompletada}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  )
}

export default App