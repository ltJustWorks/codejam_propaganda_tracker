from langchain.chains import create_extraction_chain
from langchain.chat_models import ChatOpenAI

# Schema
schema = {
    "properties": {
        "news_event": {"type": "string"},
    },
    "required": ["news_event"],
}

def tweet_to_search_format_query(tweet: str):
    llm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo")
    chain = create_extraction_chain(schema, llm)
    return chain.run(tweet)

result = tweet_to_search_format_query("House Speaker Mike Johnson says roughly 40,000 hours of Jan. 6 security footage will be posted online for public access.")
print(result)
