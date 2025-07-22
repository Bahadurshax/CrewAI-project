from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from my_crew.main import run_crew

app = FastAPI(
    title="MyCrew API",
    description="A simple API for running CrewAI tasks",
    version="1.0.0",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Vite default ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CrewRequest(BaseModel):
    topic: str

class CrewResponse(BaseModel):
    result: str
    topic: str

@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "message": "MyCrew API is running",
        "version": "1.0.0",
        "endpoints": {
            "POST /run-crew": "Run the crew with a topic",
            "GET /health": "Health check endpoint"
        }
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "my_crew_api"}

@app.post("/run-crew", response_model=CrewResponse)
async def run_crew_endpoint(request: CrewRequest):
    """
    Run the crew with the provided topic.
    
    Args:
        request: CrewRequest containing the topic
        
    Returns:
        CrewResponse with the result and topic
    """
    try:
        result = run_crew(request.topic)
        return CrewResponse(result=result, topic=request.topic)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def start_server(host: str = "0.0.0.0", port: int = 8000, reload: bool = False):
    """Start the FastAPI server"""
    uvicorn.run(
        "my_crew.api:app",
        host=host,
        port=port,
        reload=reload,
        log_level="info"
    )

if __name__ == "__main__":
    start_server() 