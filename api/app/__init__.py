from fastapi import FastAPI, Body
from json import loads

from fastapi.middleware.cors import CORSMiddleware

from app import routes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes.router, prefix="/api/v1")

@app.get("/")
async def ping():
    return "pong"
