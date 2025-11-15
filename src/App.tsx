import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  const showMessage = () => {
    setMessage('🎉 ¡Sorpresa! Bienvenido a mi app! 🎉')
  }

  const resetMessage = () => {
    setMessage('')
  }

  return (
    <div className="container">
      <div className="logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Juan Martinez</h1>

      <div className="card">
        <h2>Contador: {count}</h2>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Incrementar ➕</button>
          <button onClick={() => setCount(count - 1)}>Disminuir ➖</button>
          <button onClick={() => setCount(0)}>Reiniciar 🔄</button>
          <button onClick={showMessage}>Mostrar Mensaje 🎉</button>
          <button onClick={resetMessage}>Ocultar Mensaje ❌</button>
        </div>

        {message && <p className="message">{message}</p>}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
