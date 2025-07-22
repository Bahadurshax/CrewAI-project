import { useState } from 'react'
import './App.css'
import CrewForm from './components/CrewForm'
import ResultDisplay from './components/ResultDisplay'
import Header from './components/Header'

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleCrewSubmit = async (topic) => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/run-crew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <CrewForm onSubmit={handleCrewSubmit} loading={loading} />
        {error && (
          <div className="error-message">
            <h3>❌ Error</h3>
            <p>{error}</p>
          </div>
        )}
        {result && <ResultDisplay result={result} />}
      </main>
    </div>
  )
}

export default App
