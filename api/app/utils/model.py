import os, openai

openai.api_key = os.environ.get('OPENAI_API_KEY')


def summarize_bias(text):
    """
    Summarize the bias of a text.
    """
    # generate the prompt to run through the model
    prompt = "\n".join([line.strip() for line in f"""
    Is this article biased? If so, please provide a summary of the bias in one paragraph.

    {text}
    """.split('\n') if line.strip()])

    response = openai.Completion.create(
        engine = 'text-davinci-002',
        prompt = prompt,
        max_tokens = 500,
        temperature = 0.1,
        top_p = 0.9,
        n = 3,
    )

    if response:
        return response.choices[0].text
    else:
        raise Exception("No response from model")


def classify_bias_level(text):
    """
    Classify the bias level of a text.
    """
    return "Unbiased"
    # return openai.Completion.create(engine='davinci', prompt=text)
