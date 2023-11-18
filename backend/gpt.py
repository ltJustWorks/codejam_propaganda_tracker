import openai
import os

from openai import OpenAI

client = OpenAI(
    # defaults to os.environ.get("OPENAI_API_KEY")
    #api_key="My API Key",
)
# defaults to getting the key using os.environ.get("OPENAI_API_KEY")
# if you saved the key under a different environment variable name, you can do something like:
# client = OpenAI(
#   api_key=os.environ.get("CUSTOM_ENV_NAME"),
# )

def get_prompt(tweet, summary):
    return """Given the following information: 
    Information: """ + summary + "\n" + """
    Is the following tweet truthful?
    Tweet: """ + tweet + """
    Explain your reasoning.
"""

def fact_check(tweet, data_dict):
    result = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "You are a fact-checker that will check tweets on Twitter and ensure their truthfulness."},
      {"role": "user", "content": get_prompt(tweet, data_dict["summary"])}
      ]
    )
    return result