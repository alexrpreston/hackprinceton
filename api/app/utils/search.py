from googleapiclient.discovery import build
import requests
import os

my_api_key = os.environ.get('GOOGLE_SEARCH_API_KEY')
my_cse_id = os.environ.get('GOOGLE_CSE_API_KEY')



def google_search(search_term, **kwargs):
    service = build("customsearch", "v1", developerKey=my_api_key)
    res = service.cse().list(q=search_term, cx=my_cse_id, **kwargs).execute()
    results = res['items']
    returnedData = []
    for i in range(min(10, len(results))):
        data = {
            "url": results[i]["link"],
            "htmlSnippet": results[i]["htmlSnippet"],
            "title": results[i]["htmlTitle"]
        }
        returnedData.append(data)
    return returnedData


def get_html_from_url(url):
    res = requests.get(url)
    return res.content
