chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // You can send a request to your backend here
        if (request.contentScriptQuery == "fetchFactCheckData") {
            var url = "https://your-backend-api.com/factcheck";
            fetch(url, {
                method: 'POST', // or 'GET'
                body: JSON.stringify({ text: request.text }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => sendResponse({ factData: data }))
                .catch(error => console.log('Error:', error));
            return true;  // Will respond asynchronously.
        }
    }
);
