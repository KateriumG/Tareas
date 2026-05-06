function InputTarea({ nuevaTarea, setNuevaTarea, agregarTarea }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button 
        className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        onClick={agregarTarea}
      >
        Agregar
      </button>
    </div>
  )
}

export default InputTarea