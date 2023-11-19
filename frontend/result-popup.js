// In result-popup.js (linked to result-popup.html)
// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     if (msg.action === "displayResult") {
//         const resultsElement = document.getElementById('results');
//         resultsElement.textContent = msg.data.result; // Assuming the API response has a 'result' key
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tweetText = urlParams.get('text');

    if (tweetText) {
        document.getElementById('results').innerText = decodeURIComponent(tweetText);
    }
});