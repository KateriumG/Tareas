import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState("")

  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea])
    setNuevaTarea("")
  }

  return (
    <div>
      <h1>Mi app de tareas</h1>

      <input 
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una nueva tarea"
       />

      <button onClick={agregarTarea}>Agregar tarea</button>
    </div>
  )
}

export default App