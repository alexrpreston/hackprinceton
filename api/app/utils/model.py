import os, openai

openai.api_key = os.environ.get('OPENAI_API_KEY')

classsification_options = ('not biased', 'somewhat biased', 'extremely biased')

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
    model_name = os.environ.get('OPENAI_CLASSIFICATION_MODEL_NAME')

    if not model_name:
        raise Exception("No model name provided")

    response = openai.Completion.create(
        model = 'ada:ft-personal-2022-04-03-06-00-38',
        prompt = text,
        logprobs = 2,
    )

    response_text = response.choices[0].text.lower()

    for bias_level in classsification_options:
        if bias_level in response_text:
            return bias_level

    raise Exception("No bias level found")
