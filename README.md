# ChatGPT Conversation Exporter (Bookmarklet)

A single-click **bookmarklet** that saves any ChatGPT conversation as a **pixel-perfect HTML file** — using ChatGPT’s own CSS and the chat’s unique GUID as the filename.

---

## ✨ Features

- **Pixel-Perfect Export**  
  Captures the conversation exactly as rendered in ChatGPT, including all formatting, code blocks, tables, and embedded images.

- **Uses ChatGPT’s CSS**  
  References ChatGPT’s live stylesheets, so exported pages look identical to the app.

- **Automatic File Naming**  
  The exported file name matches the conversation’s GUID from the URL  
  (e.g. `68e12f96-cfa0-8324-9ba3-f472e73b6042.html`).

- **No Extensions or Dependencies**  
  Runs entirely client-side from your browser’s bookmarks bar.

- **Cross-Browser Compatible**  
  Works in Chrome, Edge, Firefox, and Safari (desktop).

---

## 🚀 Installation

1. Copy the bookmarklet code from [`bookmarklet.js`](./bookmarklet.js).  
2. Create a new bookmark in your browser.
3. Name it something like **Save ChatGPT Conversation**.
4. Paste the code into the **URL/location** field of the bookmark.
5. Save.

---

## 🧭 Usage

1. Open any ChatGPT conversation (URL should look like  
   `https://chat.openai.com/c/<conversation-guid>`).
2. Click your **Save ChatGPT Conversation** bookmark.
3. A `.html` file will download automatically:
