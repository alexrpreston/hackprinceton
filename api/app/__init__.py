from fastapi import FastAPI, Body
from json import loads
from app import summarize_text

app = FastAPI()

@app.get("/")
async def ping():
    return "pong"

@app.post("/summarize-bias")
async def summarize_bias(text: str = Body(...)):
    #print(text)
    #return text
    return summarize_text.summarize_text(text)