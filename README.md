# GenAI Search Assistant - Google + Gemini

**GenAI Search Assistant** is a modern, AI-powered web application that combines **Google Search**, **Gemini AI**, and **RAG (Retrieval-Augmented Generation)** technology to provide users with context-aware search results. It features a sleek interface, voice input, and multi-source AI summarization.

---

## 🖥️ Features

- **Multi-Source Search:** Combines Google search, internal documentation, and academic sources.
- **Gemini AI Integration:** Generates context-aware AI summaries using Google Gemini API.
- **RAG Pipeline Visualization:** Shows step-by-step retrieval, generation, and response process.
- **Voice-Enabled Search:** Speak your queries for instant results.
- **Interactive UI:** Suggestions, loading animations, and animated result cards.
- **Modern Design:** Glassmorphism, gradient animations, and TailwindCSS-based UI.

---

## 📂 Project Structure

```

├── index.html        # Main web interface
├── style.css         # Optional external styles (can be embedded in index.html)
├── script.js         # JavaScript functionality (search, voice, Gemini API)
└── README.md         # Project documentation

````

---

## ⚡ Technology Stack

- **Frontend:** HTML, CSS (TailwindCSS), JavaScript
- **AI & NLP:** Google Gemini API, LangChain
- **Database:** Vector DB for embeddings (RAG)
- **Other Features:** Voice recognition (Web Speech API), multi-source aggregation

---

## 🚀 How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/hq969/genai-search-assistant.git
   cd genai-search-assistant
````

2. **Open in browser**
   Open `index.html` in your preferred browser.

3. **Search**

   * Type a query in the search bar or use voice input.
   * AI summary and source results will appear below with RAG visualization.

4. **Customize**

   * Replace the Gemini API key in `script.js`:

     ```javascript
     const API_KEY = 'YOUR_GEMINI_API_KEY';
     ```
   * Add more suggestion items in `index.html` under the search suggestions section.

---

## 🎨 UI / UX Highlights

* Animated gradient background with Gemini-inspired flow.
* Glassmorphism for search container and result cards.
* Animated loading dots and voice pulse indicators.
* RAG step visualization with live updates.

---

## 📜 Example Query

```
"What are the latest developments in quantum computing?"
```

**AI Response:**
Gemini AI analyzes multiple sources, summarizes the latest advancements, and presents a context-aware answer with confidence score.

---

## 🔒 Security

* Never expose your API key in public repositories.
* For production, use a backend proxy to securely handle Gemini API requests.

---

## 📌 Future Enhancements

* Add user authentication and personalized search history.
* Integrate additional AI models for comparison.
* Implement backend for RAG pipeline and document retrieval.
* Support file/document search with embeddings.

---

## 📞 Contact

Harsh Sonkar
Email: [contact.harshsonkar@gmail.com](mailto:contact.harshsonkar@gmail.com)
LinkedIn | GitHub | CodeForces | HackerRank

---

## 📝 License

This project is licensed under the MIT License.

---
