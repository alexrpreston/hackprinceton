from readability import Document

def extract_content(html):
    """
    Extracts the summary from the html
    :param html: html string
    :return: summary string
    """
    doc = Document(html)
    return doc.summary()
