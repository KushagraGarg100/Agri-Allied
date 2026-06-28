import os
import uuid
from pathlib import Path
from typing import Dict, List, Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Query, Request, Response, status
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

app = FastAPI(
    title="AgriGuard AI Core Engine",
    description="Context-grounded crop advisory system for high-altitude regions.",
)

origins = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173,http://127.0.0.1:3000",
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TelemetryContext(BaseModel):
    sector: str = Field(..., example="Kedarnath Valley")
    elevation: int = Field(..., example=3500)


class AdvisoryRequest(BaseModel):
    query: str = Field(..., example="Sudden yellow spots on organic potato leaves.")
    telemetry: TelemetryContext


class AdvisoryResponse(BaseModel):
    id: str
    query: str
    telemetry: TelemetryContext
    ai_response: str
    resolved: bool = False


class AdvisoryUpdate(BaseModel):
    resolved: bool
    supervisor_notes: Optional[str] = None


mock_database: Dict[str, dict] = {
    "demo-uuid-1": {
        "id": "demo-uuid-1",
        "query": "Blight suspected on terrace tomato crops.",
        "telemetry": {"sector": "Guptkashi", "elevation": 1319},
        "ai_response": "Based on Zone 4 agro-climatic telemetry: This matches Early Blight. Use organic copper fungicide sprays allowed under Mandakini Collective mandates. Avoid evening overhead watering.",
        "resolved": False,
    }
}


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={"detail": "Validation error", "errors": exc.errors()},
    )


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(status_code=exc.status_code, content={"detail": exc.detail})


@app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "Internal server error"},
    )


@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "AgriGuard AI Core Engine"}


@app.get("/")
async def root():
    return {"message": "AgriGuard AI API is running"}


@app.get("/api/v1/advisory", response_model=List[AdvisoryResponse], status_code=status.HTTP_200_OK)
async def get_all_advisories():
    """Retrieve all historical consultations."""
    return list(mock_database.values())


@app.get("/api/v1/advisory/{id}", response_model=AdvisoryResponse, status_code=status.HTTP_200_OK)
async def get_advisory_by_id(id: str):
    """Retrieve a single diagnostic log."""
    if id not in mock_database:
        raise HTTPException(status_code=404, detail=f"Advisory record with ID {id} not found.")
    return mock_database[id]


@app.post("/api/v1/advisory", response_model=AdvisoryResponse, status_code=status.HTTP_201_CREATED)
async def create_advisory(payload: AdvisoryRequest):
    """Submit a crop query with context and get simulated advisory feedback."""
    generated_id = str(uuid.uuid4())
    telemetry_payload = payload.telemetry.model_dump() if hasattr(payload.telemetry, "model_dump") else payload.telemetry.dict()
    simulated_ai = (
        f"AgriGuard Verified Advisory for {payload.telemetry.sector} "
        f"({payload.telemetry.elevation}m): Checked against high-altitude crop metrics. "
        f"Actionable guidance generated for: '{payload.query}'."
    )

    new_record = {
        "id": generated_id,
        "query": payload.query,
        "telemetry": telemetry_payload,
        "ai_response": simulated_ai,
        "resolved": False,
    }

    mock_database[generated_id] = new_record
    return new_record


@app.put("/api/v1/advisory/{id}", response_model=AdvisoryResponse, status_code=status.HTTP_200_OK)
async def update_advisory(id: str, payload: AdvisoryUpdate):
    """Update resolution state and field notes for an incident."""
    if id not in mock_database:
        raise HTTPException(status_code=404, detail=f"Advisory log {id} does not exist.")

    record = mock_database[id]
    record["resolved"] = payload.resolved
    if payload.supervisor_notes:
        record["ai_response"] += f" [Supervisor Note]: {payload.supervisor_notes}"

    mock_database[id] = record
    return record


@app.delete("/api/v1/advisory/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_advisory(id: str):
    """Remove a document record from the telemetry log."""
    if id not in mock_database:
        raise HTTPException(status_code=404, detail=f"Advisory log {id} does not exist.")
    del mock_database[id]
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@app.get("/api/v1/advisory/sector/search", response_model=List[AdvisoryResponse], status_code=status.HTTP_200_OK)
async def search_advisories_by_sector(q: str = Query(..., min_length=1, description="Name of the agricultural sector cluster")):
    """Filter records by specific geographical sectors (e.g., Okhimath)."""
    results = [
        record for record in mock_database.values() if q.lower() in record["telemetry"]["sector"].lower()
    ]
    return results