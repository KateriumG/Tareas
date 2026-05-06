function InputTarea({ nuevaTarea, setNuevaTarea, agregarTarea }) {
  return (
    <div>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>
    </div>
  )
}

export default InputTarea