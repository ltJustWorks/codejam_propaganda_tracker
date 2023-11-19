import os
import re

api_key = "AIzaSyA_IGujkSQUJyVjEnjWQr6Xp1zx3def_8M"
cse_id = "d51d5ea84965846df"

os.environ["GOOGLE_CSE_ID"] = cse_id
os.environ["GOOGLE_API_KEY"] = api_key

from langchain.tools import Tool

"""
tool = Tool(
    name="Google Search",
    description="Search Google for recent results.",
    func=search.run,
)

result = tool.run("ukraine crisis")
print(result)
"""

"""
wikipedia = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper())

result = wikipedia.run("Advertisers leaving Twitter")
print(result)
"""

from langchain.tools import DuckDuckGoSearchResults
from langchain.tools import DuckDuckGoSearchRun


def get_summary(query):
    search = DuckDuckGoSearchRun()
    return search.run(query)


def get_results(query):
    search = DuckDuckGoSearchResults()
    return search.run(query)


def parse_results(results: str):
    pattern = r"\[(snippet|title|link): (.*?)\]"

    # Use regex to find all matches
    data_list = []

    parsed_results = results.split("], [")
    for string in parsed_results[:2]:
        print("string:", string)
        string = string.replace("]", "")
        split_string = string.split("link:")
        link = split_string[1]
        split_string = split_string[0].split("title:")
        title = split_string[1]
        split_string = split_string[0].split("snippet:")
        snippet = split_string[1]

        data_list.append({"snippet": snippet, "title": title, "link": link})
    return data_list


# string = "House Speaker Mike Johnson 40,000 hours Jan. 6 security footage posted online"
string = "House Speaker Mike Johnson says roughly 40,000 hours of Jan. 6 security footage will be posted online for public access."


def get_references(results_data_list):
    references_list = []
    for results_dict in results_data_list:
        references_list.append(results_dict["link"])
    return references_list


def get_search_result_dict(query):
    return {
        "query": query,
        "summary": get_summary(query),
        "references": get_references(parse_results(get_results(query))),
    }


def get_multiple_search_result_dict(query_list):
    result_dict = {"summary": "", "references": []}
    for query in query_list:
        query_dict = get_search_result_dict(query)
        result_dict["summary"] += query_dict["summary"] + " "
        for reference in query_dict["references"]:
            result_dict["references"].append(reference)

    return result_dict


# print(get_search_result_dict(string))
