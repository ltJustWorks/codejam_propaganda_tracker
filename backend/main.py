from gpt import fact_check
from search import get_search_result_dict

tweet = "House Speaker Mike Johnson says roughly 40,000 hours of Jan. 6 security footage will be posted online for public access"

result = fact_check(tweet, get_search_result_dict(tweet))
print(result)