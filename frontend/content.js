// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "fetchTweetText") {
        // Adjust this selector to target the tweet's text container on the Twitter website
        const tweetTextContainer = document.querySelector('div[data-testid="tweetText"]');

        if (tweetTextContainer) {
            // Combine the text from each span element within the container
            const tweetText = Array.from(tweetTextContainer.querySelectorAll('span')).map(span => span.textContent).join('');

            sendResponse({ tweetText: tweetText });
        } else {
            sendResponse({ tweetText: 'Tweet text not found.' });
        }

        return true; // Required for asynchronous response
    }
});