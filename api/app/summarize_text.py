from email import header
from json import loads
from urllib import request
from urllib.request import HTTPBasicAuthHandler
import os
import requests

# This function recieves a string of text and returns a json object
def summarize_text(text):
    # Analyze the text for bias
    #print(os.environ)

    example1 = ["US media outlets outside of right-wing sites were desperate not to report the Hunter emails and to block their reporters from doing so. So they just started printing that it was ‘Russian disinformation,’ knowing there was no basis for that, until they could figure out what to do.", "Extremely Biased"]
    example2 = ["Iraq said its troops were battling U.S.-led invasion forces inside Nassiriya and on the city's outskirts on Tuesday and inflicting heavy casualties.", "Very Biased"]
    example3 = ["Attorneys for the Trumps again outlined public statements made by James about Donald Trump in their appeal, calling them \"an extraordinary and unprecedented barrage of inappropriate public statements\" since she ran for office in 2018, threatening to investigate and prosecute Trump and those close to him. The appeal argues that Engoron's decision did not address James' comments, saying they reveal \"extraordinary animus\" on James' part and cannot be ignored.", "Moderately Biased"]
    example4 = ["U.N. arms inspectors said Tuesday they had withdrawn two U-2 reconnaissance planes over Iraq for safety reasons after Baghdad complained both aircraft were in the air simultaneously.", "Slightly Biased"]
    example5 = ["The Red Cross, one of the few aid groups with staff operating in Iraq, hopes to negotiate access to the main power station, which is said to be under control of U.S.-led coalition forces. But neither local staff nor specialists in neighboring Kuwait have been cleared to go because of continued clashes.", "Not Biased"]

    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + os.environ['OPENAIAPIKEY']
    }
    json_object = requests.post(
        'https://api.openai.com/v1/classifications', 
        headers=headers,
        json={
            "examples": [
                example1,
                example2,
                example3,
                example4,
                example5
            ],
            "labels": ["Extremely biased", "Very biased", "Moderately biased", "Slightly biased", "Not biased"],
            "query": text,
            "search_model": "ada",
            "model": "curie"
        }
    )
    #create a json object
   # print(json_object.text)
    return json_object.text.split("\n")[2][12:-2]