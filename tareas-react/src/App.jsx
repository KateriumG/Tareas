import { useState,useEffect } from 'react'

import './index.css'

import InputTarea from './components/InputTarea'
import ListaTareas from './components/ListaTareas'
import Header from './components/Header'

function App() {
  // Cargar tareas desde localStorage al iniciar la aplicación
  const [tareas, setTareas] = useState(()=> {
    const tareasGuardadas = localStorage.getItem("tareas")
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
  })

  const [nuevaTarea, setNuevaTarea] = useState("")

  // Estado para el modo oscuro con persistencia
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode")
    return savedMode ? JSON.parse(savedMode) : false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} flex flex-col items-center p-6`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow w-full max-w-md`}>
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