import Tarea from "./Tarea"

function ListaTareas({ tareas, toggleCompletada, eliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          index={index}
          toggleCompletada={toggleCompletada}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  )
}

export default ListaTareas