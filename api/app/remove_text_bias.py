import os
import openai

openai.api_key = os.getenv("OPENAIAPIKEY")

def remove_bias(text): 

    response = openai.Edit.create(
    engine="text-davinci-edit-001",
    input=text,
    instruction="Remove sources of bias",
    temperature=0.7,
    top_p=1
    )
    
    return response