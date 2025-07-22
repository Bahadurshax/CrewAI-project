import { useState } from 'react'
import './ResultDisplay.css'

function ResultDisplay({ result }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result.result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const downloadAsMarkdown = () => {
    const blob = new Blob([result.result], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mycrew-result-${Date.now()}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="result-display">
      <div className="result-header">
        <h2>📄 Crew Results</h2>
        <div className="result-meta">
          <span className="topic-label">Topic:</span>
          <span className="topic-text">{result.topic}</span>
        </div>
        <div className="result-actions">
          <button 
            onClick={copyToClipboard}
            className="action-button copy-button"
            title="Copy to clipboard"
          >
            {copied ? '✅ Copied!' : '📋 Copy'}
          </button>
          <button 
            onClick={downloadAsMarkdown}
            className="action-button download-button"
            title="Download as Markdown"
          >
            💾 Download
          </button>
        </div>
      </div>
      
      <div className="result-content">
        <div className="content-header">
          <h3>Generated Content</h3>
          <span className="char-count">
            {result.result.length} characters
          </span>
        </div>
        <div className="content-body">
          <pre className="result-text">{result.result}</pre>
        </div>
      </div>
    </div>
  )
}

export default ResultDisplay 