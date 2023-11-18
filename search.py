import requests
import os

api_key = 'AIzaSyA_IGujkSQUJyVjEnjWQr6Xp1zx3def_8M'
cse_id = 'd51d5ea84965846df'
search_query = 'ukraine crisis'

os.environ["GOOGLE_CSE_ID"] = cse_id
os.environ["GOOGLE_API_KEY"] = api_key

from langchain.tools import Tool
from langchain.utilities import GoogleSearchAPIWrapper
from langchain.tools import WikipediaQueryRun
from langchain.utilities import WikipediaAPIWrapper

search = GoogleSearchAPIWrapper()

"""
tool = Tool(
    name="Google Search",
    description="Search Google for recent results.",
    func=search.run,
)

result = tool.run("ukraine crisis")
print(result)
"""

wikipedia = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper())

result = wikipedia.run("Advertisers leaving Twitter")
print(result)
