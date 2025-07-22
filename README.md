# MyCrew

A CrewAI-based application for content creation and management with a FastAPI web server and React frontend.

## Installation

### Backend Dependencies

#### Option 1: Using pip
```bash
pip install -e .
```

#### Option 2: Using requirements.txt
```bash
pip install -r requirements.txt
```

### Frontend Dependencies

Make sure you have Node.js installed (version 16 or higher), then:

```bash
cd frontend
npm install
```

## Usage

### Backend API Server

#### Quick Start

Start the FastAPI server:

```bash
# Using uvicorn directly
uvicorn my_crew.api:app --host 0.0.0.0 --port 8000 --reload

# Or using the script entry point
server
```

The API server will be available at `http://localhost:8000`

#### API Endpoints

- `GET /` - API information and available endpoints
- `GET /health` - Health check
- `POST /run-crew` - Run the crew with a topic

#### Interactive API Documentation

Once the server is running, you can access:
- **Swagger UI**: `http://localhost:8000/docs` - Interactive API documentation
- **ReDoc**: `http://localhost:8000/redoc` - Alternative documentation format

### Frontend Application

#### Quick Start

Start the React development server:

```bash
# From project root
python start_frontend.py

# Or from frontend directory
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173`

#### Features

- **Modern UI**: Clean, responsive design with glassmorphism effects
- **Topic Input**: Text area for entering custom topics
- **Topic Suggestions**: Pre-defined topic suggestions for quick testing
- **Real-time Results**: Live display of crew execution results
- **Copy & Download**: Easy copying to clipboard and downloading as Markdown
- **Error Handling**: Clear error messages and loading states
- **Mobile Responsive**: Works great on all device sizes

### Full Stack Development

To run both backend and frontend together:

1. **Terminal 1 - Backend:**
   ```bash
   uvicorn my_crew.api:app --host 0.0.0.0 --port 8000 --reload
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   python start_frontend.py
   ```

3. **Access the application:**
   - Frontend: `http://localhost:5173`
   - API Docs: `http://localhost:8000/docs`

### Example API Usage

```bash
# Run the crew via API
curl -X POST "http://localhost:8000/run-crew" \
     -H "Content-Type: application/json" \
     -d '{"topic": "Your topic here"}'

# Check API health
curl "http://localhost:8000/health"
```

### Example Script

Run the included example script to test the API:

```bash
python examples/api_example.py
```

This will:
- Check server health
- Display API information
- Run the crew with example topics
- Save results to JSON files

## Project Structure

```
my_crew/
├── src/my_crew/          # Backend Python code
│   ├── api.py            # FastAPI server
│   ├── main.py           # Crew execution logic
│   └── crew.py           # CrewAI configuration
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # App entry point
│   └── package.json      # Frontend dependencies
├── examples/             # Example scripts
├── requirements.txt      # Python dependencies
└── README.md            # This file
```

## Development

### Backend Development

The backend uses:
- **FastAPI**: Modern Python web framework
- **CrewAI**: AI agent collaboration framework
- **Pydantic**: Data validation
- **Uvicorn**: ASGI server

### Frontend Development

The frontend uses:
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Modern styling with glassmorphism effects
- **Fetch API**: HTTP requests to backend

### Adding New Features

1. **Backend**: Add new endpoints in `src/my_crew/api.py`
2. **Frontend**: Create new components in `frontend/src/components/`
3. **Styling**: Add CSS files alongside components
4. **Testing**: Update example scripts as needed

## Understanding Your Crew

The my-crew Crew is composed of multiple AI agents, each with unique roles, goals, and tools. These agents collaborate on a series of tasks, defined in `config/tasks.yaml`, leveraging their collective skills to achieve complex objectives. The `config/agents.yaml` file outlines the capabilities and configurations of each agent in your crew.

## Support

For support, questions, or feedback regarding the MyCrew Crew or crewAI.
- Visit our [documentation](https://docs.crewai.com)
- Reach out to us through our [GitHub repository](https://github.com/joaomdmoura/crewai)
- [Join our Discord](https://discord.com/invite/X4JWnZnxPb)
- [Chat with our docs](https://chatg.pt/DWjSBZn)

Let's create wonders together with the power and simplicity of crewAI.
