chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.tweetText) {
        fetch('https://your-api.com/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: msg.tweetText })
        })
            .then(response => response.json())
            .then(data => {
                // Send the data to result-popup.html
                chrome.runtime.sendMessage({ action: "displayResult", data: data });
            })
            .catch(error => console.error('Error:', error));
    }
});
