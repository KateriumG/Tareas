function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex items-center justify-between mb-6 p-4 rounded-2xl shadow-md 
                       bg-white dark:bg-gray-800 transition-colors">

      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        📝 Mi app de tareas
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl 
                   bg-gray-200 dark:bg-gray-700 
                   text-gray-800 dark:text-gray-200
                   hover:bg-gray-300 dark:hover:bg-gray-600
                   transition-all duration-200"
      >
        {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
      </button>

    </header>
  )
}

export default Header