from fastapi import APIRouter, Body, Query, WebSocket

from app.utils import model, parsing, search

from bs4 import BeautifulSoup

router = APIRouter()


@router.post("/summarize-bias")
def summarize_bias(
    input: str = Body(..., description="The text to summarize. Either text or HTML."),
    type: str = Query("text", description="The type of input. Either 'text' or 'html'."),
):
    """
    Attempt to provide an explanation of the bias in the text.
    """
    if type == "text":
        text = input
    elif type == "html":
        text = parsing.extract_content(input)
    else:
        raise ValueError("type must be either 'text' or 'html'.")

    cleaned_text = parsing.process_text(text)
    output = model.summarize_bias(cleaned_text)

    return output.strip()

@router.post("/classify-bias-level")
def classify_bias_level(
    input: str = Body(..., description="The text to summarize. Either text or HTML."),
    type: str = Query("text", description="The type of input. Either 'text' or 'html'."),
):
    """
    Attempt to classify the bias level of the text.
    """
    if type == "text":
        text = input
    elif type == "html":
        text = parsing.extract_content(input)
    else:
        raise ValueError("type must be either 'text' or 'html'.")

    cleaned_text = parsing.process_text(text)
    bias_level = model.classify_bias_level(cleaned_text)

    return bias_level

@router.post("/search")
async def search_endpoint(
    query: str = Query(..., description="The query to search for."),
):
    """
    Search a query and rank the results by level of bias
    """
    results = search.google_search(query, num=10)

    return_val = []

    for search_result in results:
        html = search.get_html_from_url(search_result["url"])
        bias_level = classify_bias_level(html, type = "html")

        return_val.append({
            "title": BeautifulSoup(search_result["title"], "html.parser").text,
            "snippet": BeautifulSoup(search_result["htmlSnippet"], "html.parser").text,
            "url": search_result["url"],
            "biasLevel": bias_level,
        })

    return return_val
