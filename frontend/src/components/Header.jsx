import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>🤖 MyCrew</h1>
          <span className="subtitle">AI-Powered Content Creation</span>
        </div>
        <nav className="nav">
          <a href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer">
            API Docs
          </a>
          <a href="http://localhost:8000/health" target="_blank" rel="noopener noreferrer">
            Health Check
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header 