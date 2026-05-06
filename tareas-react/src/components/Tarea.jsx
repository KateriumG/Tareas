function Tarea({ tarea, index, toggleCompletada, eliminarTarea }) {
  return (
    <li
      style={{
        textDecoration: tarea.completada ? "line-through" : "none"
      }}
    >
      {tarea.texto}

      <button onClick={() => toggleCompletada(index)}>
        ✔️
      </button>

      <button onClick={() => eliminarTarea(index)}>
        ❌
      </button>
    </li>
  )
}

export default Tarea