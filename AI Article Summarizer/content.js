// content.js (The NEW, corrected code)

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  // Check if the message is the one we want
  if (req.type === "GET_ARTICLE_TEXT") {
    
    // 1. We must clone the document. Readability.js modifies
    //    the DOM, so we give it a copy to avoid breaking the live page.
    const documentClone = document.cloneNode(true);
    
    // 2. Create a new Readability instance and parse the clone
    //    This is where the magic happens!
    const reader = new Readability(documentClone);
    const article = reader.parse();

    // 3. 'article' will be null if it couldn't find anything.
    //    If it's not null, send the plain text content back.
    if (article && article.textContent) {
      sendResponse({ text: article.textContent });
    } else {
      // Send back an empty string if no article was found
      // Your popup.js already handles this case
      sendResponse({ text: "" });
    }
  }

  // Note: We don't need "return true;" here because
  // reader.parse() is synchronous (it finishes immediately).
});