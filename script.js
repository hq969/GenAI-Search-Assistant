/* =========== Main Script for GenAI Search Assistant =========== */

// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const voiceBtn = document.getElementById('voiceBtn');
const queryInput = document.getElementById('queryInput');
const resultsDiv = document.getElementById('results');
const ragVizDiv = document.getElementById('ragViz');

// Search Button Click
searchBtn.addEventListener('click', () => {
  const query = queryInput.value.trim();
  if (!query) {
    alert("Please enter a query.");
    return;
  }
  handleQuery(query);
});

// Enter Key Support
queryInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

// Voice Input
voiceBtn.addEventListener('click', () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech recognition is not supported in this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    queryInput.value = text;
    handleQuery(text);
  };

  recognition.onerror = () => {
    alert("Voice recognition failed. Try again.");
  };
});

// Handle Query with Gemini Integration
async function handleQuery(query) {
  displayResult(`🔎 Searching for: <strong>${query}</strong>`);
  displayRAG(`🔄 Sending query to Gemini for retrieval & generation...`);

  try {
    // --- Gemini API call ---
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: query }] }]
        })
      }
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    // Extract AI-generated text
    const aiAnswer = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response found.";

    // Show results
    displayResult(`🤖 <strong>AI Answer:</strong> ${aiAnswer}`);
    displayRAG(`📊 Retrieved and processed data for query: <strong>${query}</strong>`);
  } 
  catch (error) {
    console.error(error);
    displayResult(`❗ Error: ${error.message}`);
    displayRAG(`⚠️ Retrieval or generation failed.`);
  }
}

