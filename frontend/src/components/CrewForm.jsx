import { useState } from 'react'
import './CrewForm.css'

function CrewForm({ onSubmit, loading }) {
  const [topic, setTopic] = useState('')
  const suggestions = [
    'The future of artificial intelligence in healthcare',
    'Sustainable energy solutions for urban areas',
    'The impact of social media on modern communication',
    'Climate change adaptation strategies',
    'The future of remote work and collaboration',
    'Emerging technologies in education',
    'Cybersecurity challenges in the digital age',
    'The role of blockchain in modern business'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (topic.trim()) {
      onSubmit(topic.trim())
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setTopic(suggestion)
  }

  return (
    <div className="crew-form-container">
      <div className="form-card">
        <h2>🚀 Start Your AI Crew</h2>
        <p className="form-description">
          Enter a topic and let our AI agents collaborate to create comprehensive content for you.
        </p>
        
        <form onSubmit={handleSubmit} className="crew-form">
          <div className="input-group">
            <label htmlFor="topic">Topic:</label>
            <textarea
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter your topic here... (e.g., The future of AI in healthcare)"
              disabled={loading}
              required
              rows={3}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading || !topic.trim()}
            className="submit-button"
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Running Crew...
              </>
            ) : (
              'Run Crew'
            )}
          </button>
        </form>

        <div className="suggestions">
          <h3>💡 Topic Suggestions</h3>
          <div className="suggestion-tags">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                disabled={loading}
                className="suggestion-tag"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrewForm 