from fastapi import FastAPI, Body
from json import loads
from app import summarize_text, remove_text_bias, search_bias
from bs4 import BeautifulSoup
from readability import Document
import re

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def ping():
    return "pong"

@app.post("/summarize-biasHTML")
async def summarize_biasHTML(text: str = Body(...)):
    text = Document(text)
    soup = BeautifulSoup(text.summary(), 'html.parser')
    text = soup.get_text()
    cleanedText = text.replace("\n"," ").replace("\r", "")
    print(cleanedText)
    print(summarize_text.summarize_text(cleanedText))
    return summarize_text.summarize_text(cleanedText)

@app.post("/summarize-bias")
async def summarize_bias(text: str = Body(...)):
    print(text)
    print(summarize_text.summarize_text(text))
    return summarize_text.summarize_text(text)


@app.post("/remove-bias")
async def remove_bias(text: str = Body(...)):
    return remove_text_bias.remove_bias(text)

@app.post("/search-bias")
async def search(text: str = Body(...)):
    return search_bias.get_bias(text)
