import os, openai

print(os.environ)
openai.api_key = os.environ.get('OPENAI_API_KEY')

classsification_options = ('not_biased', 'somewhat_biased', 'extremely_biased')

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
        prompt = f"{prompt}\n\n##\n\n",
        max_tokens = 1500,
        temperature = 0.1,
        top_p = 0.9,
        n = 1,
    )

    if response:
        return response.choices[0].text.split("\n\n")[-1]
    else:
        raise Exception("No response from model")


def classify_bias_level(text):
    """
    Classify the bias level of a text.
    """
    model_name = os.environ.get('OPENAI_CLASSIFICATION_MODEL_NAME')

    if not model_name:
        raise Exception("No model name provided")

    prompt = f'{text}\n\n###\n\n'

    response = openai.Completion.create(
        model = model_name,
        prompt = prompt,
        max_tokens = 5,
        logprobs = 3,
    )

    response_text = response.choices[0].text.lower()
    print(response)

    for bias_level in classsification_options:
        if bias_level in response_text:
            if bias_level == 'not_biased':
                return 'Not biased'
            elif bias_level == 'somewhat_biased':
                return 'Somewhat biased'
            elif bias_level == 'extremely_biased':
                return 'Extremely biased'
            else:
                raise Exception("Unknown bias level")

    return "Couldn't classify bias level"
