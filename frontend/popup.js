// // This script could interact with content.js or background.js
// document.addEventListener('DOMContentLoaded', function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { fromPopup: true }, function (response) {
//             document.getElementById('result').innerText = response.factCheckSummary;
//         });
//     });
// });
