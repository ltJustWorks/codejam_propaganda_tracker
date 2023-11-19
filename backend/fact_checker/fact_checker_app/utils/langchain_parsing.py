import json
from langchain.chains import create_extraction_chain
from langchain.chat_models import ChatOpenAI

# Schema
schema = {
    "properties": {
        "relevant_search_query": {"type": "string"},
    },
    "required": ["relevant_search_query"],
}

def tweet_to_search_format_query(tweet: str) -> list:
    llm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo")
    chain = create_extraction_chain(schema, llm)
    result = chain.run(tweet)
    print("the result type is", type(result))
    return result

def get_search_query_string_list(search_query_list: list):
    result_list = []
    for dictionary in search_query_list:
        result_list.append(dictionary["relevant_search_query"])
    return result_list 

def tweet_to_query_string_list(tweet):
    return get_search_query_string_list(tweet_to_search_format_query(tweet))