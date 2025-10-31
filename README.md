# 🧠 AI Article Summarizer

A modern, lightweight Chrome Extension that summarizes web articles using AI — instantly.  
Choose between **brief**, **detailed**, or **bullet-point summaries** with a clean, responsive popup UI.


---

## ✨ Features

- 🪄 **AI-Powered Summaries** – Quickly summarize any webpage using AI.
- 🧩 **Three Summary Modes** – Brief, Detailed, or Bullet Points.
- ⚡ **Beautiful UI** – Minimalist, modern interface with smooth interactions.
- 📋 **One-Click Copy** – Copy the generated summary instantly.
- 💡 **Lightweight** – Fast and efficient browser extension.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Design** | Tailwind-inspired custom CSS |
| **Backend (optional)** | OpenAI API or any text summarization API |
| **Browser Support** | Chrome / Edge (Manifest V3) |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/ai-article-summarizer.git
cd ai-article-summarizer
```
### 2️⃣ Folder Structure
```bash
ai-article-summarizer/
├── manifest.json
├── popup.html
├── popup.js
├── styles.css  (optional, if separated)
├── assets/
│   └── icon.png
```
3️⃣ Load in Chrome
```bash
Open Chrome → Extensions → Manage Extensions.

Turn on Developer Mode (top right).

Click “Load unpacked”.

Select your project folder.

Click the extension icon and start summarizing 🎉
```
### ⚙️ Configuration (Optional: API Integration)

If using an AI API (like OpenAI or Gemini):

// In popup.js
const apiKey = "YOUR_API_KEY_HERE";
const endpoint = "https://api.openai.com/v1/chat/completions";


You can then call your API with fetch() and update the #result div with the summary.

### 💅 UI Overview

The popup interface includes:

Dropdown → Select summary type

Summarize Button → Generates summary

Copy Button → Copies result

Scrollable result box with smooth shadows and gradient background

The UI is fully responsive and looks like a modern Chrome popup card.
