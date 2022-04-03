from readability import Document
from bs4 import BeautifulSoup

def extract_content(html):
    """
    Extracts the summary from the html
    :param html: html string
    :return: summary string
    """
    doc = Document(html)
    summary = doc.summary()

    bs_node = BeautifulSoup(summary, 'html.parser')

    for tag in bs_node(['style', 'script', '[document]', 'head', 'title']):
        tag.extract()

    return bs_node.getText()


def process_text(text):
    """
    Converts all newlines to spaces and truncates the text to 3500 characters
    :param text: text string
    :return: processed text string
    """
    text = text.replace('\n', ' ').replace('\r', '')
    text = text[:3500]

    return text
