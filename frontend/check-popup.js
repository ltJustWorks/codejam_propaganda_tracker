// check-popup.js


// Listen for the DOM to be loaded

document.addEventListener('DOMContentLoaded', () => {
    const checkNowButton = document.getElementById('fact-check-submit');
    const closeButton = document.getElementById('close-button');

    // Only add event listeners if the elements were found
    if (checkNowButton) {
        // check-popup.js
        // check-popup.js
        document.addEventListener('DOMContentLoaded', () => {
            const checkButton = document.getElementById('fact-check-submit');

            if (checkButton) {
                checkButton.addEventListener('click', () => {
                    console.log('Checked')
                    // Query the current active tab
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                        // Send a message to the content script in the active tab
                        chrome.tabs.sendMessage(tabs[0].id, { action: "fetchTweetText" }, (response) => {
                            if (chrome.runtime.lastError) {
                                // Handle any errors that occur during message passing
                                console.error(chrome.runtime.lastError.message);
                                return;
                            }

                            if (response && response.tweetText) {
                                // Process the fetched tweet text, e.g., display it or send it to an API
                                // You may open result-popup.html or update the current popup with the fetched text
                                console.log("Tweet Text:", response.tweetText);
                            }
                        });
                    });
                });
            } else {
                console.error('Check Now button not found');
            }
        });



    } else {
        console.error('Search button not found');
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            window.close();
        });
    } else {
        console.error('Close button not found');
    }
});



