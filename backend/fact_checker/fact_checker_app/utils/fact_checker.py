from .langchain_parsing import tweet_to_query_string_list
from .gpt import fact_check
from .search import get_multiple_search_result_dict


def tweet_fact_checker(tweet):
    print("request made", tweet)

    search_query = tweet_to_query_string_list(tweet)
    search_result = get_multiple_search_result_dict(search_query)
    # result = {"content": ""}
    result = fact_check(tweet, search_result)

    result_obj = {
        "response": result["content"],
        "references": search_result["references"],
    }
    """
    result_obj = {"response": "something", "references": ["a_link", "another_link"]}
    """
    print(result_obj)
    return result_obj
