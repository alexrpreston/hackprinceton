from fastapi import APIRouter, Body, Query

from app.utils import model, parsing

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

    bias_level = model.classify_bias_level(text)

    return bias_level
