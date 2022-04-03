# Webscrapper for google the finds the bias of the resulting webpages

import os
from urllib.request import urlopen

from app import summarize_text

base_url = "https://www.google.com/search?q="
key = os.environ['GOOGLESEARCHAPIKEY']


def get_bias(term):
    "GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures"
    
    text = requests.get(
        'https://www.googleapis.com/customsearch/v1?key=' + key + '&cx=017576662512468239146:omuauf_lfve&q=' + term
    )
    
    json_object = summarize_text.summarize_text(text)
 
    print(json_object)
    return "label"