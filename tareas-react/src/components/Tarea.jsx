function Tarea({ tarea, index, toggleCompletada, eliminarTarea }) {
  return (
    <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-2">
      <span
        className={`flex-1 text-black dark:text-white ${
          tarea.completada ? "line-through text-gray-400 dark:text-gray-500" : ""
        }`}
      >
        {tarea.texto}
      </span>

      <div className="flex gap-2">
        <button
          className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300"
          onClick={() => toggleCompletada(index)}
        >
          ✔️
        </button>

        <button
          className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
          onClick={() => eliminarTarea(index)}
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default Tarea