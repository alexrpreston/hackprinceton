import os

from fastapi import FastAPI, Body, WebSocket
from json import loads

from fastapi.middleware.cors import CORSMiddleware

from app import routes

os.environ["PYTHONUNBUFFERED"] = "1"

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


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        data = loads(data)
        await websocket.send_text(data)
