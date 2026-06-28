# Backend Setup

## How to run locally

1. Open the backend folder.
2. Create and activate a virtual environment:
   - `python -m venv venv`
   - `venv\Scripts\activate`
3. Install dependencies:
   - `pip install fastapi uvicorn python-dotenv`
4. Start the server:
   - `uvicorn main:app --reload --host 0.0.0.0 --port 8000`

## Endpoints

- `GET /health`
- `GET /api/v1/advisory`
- `GET /api/v1/advisory/{id}`
- `POST /api/v1/advisory`
- `PUT /api/v1/advisory/{id}`
- `DELETE /api/v1/advisory/{id}`
- `GET /api/v1/advisory/sector/search?q=...`
