const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('Missing GEMINI_API_KEY environment variable.');
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

const client = new GoogleGenerativeAI(apiKey);
const model = client.getGenerativeModel({ model: 'gemini-2.5-flash' });

function formatMessageHistory(messages) {
  return messages.map((message) => {
    const prefix = message.role === 'user' ? 'User:' : 'Assistant:';
    return `${prefix} ${message.content}`;
  });
}

app.post('/api/chat', async (req, res) => {
  const messages = Array.isArray(req.body?.messages) ? req.body.messages : null;

  if (!messages || !messages.length) {
    return res.status(400).json({ error: 'Expected a non-empty messages array.' });
  }

  try {
    const history = formatMessageHistory(messages);
    const chat = model.startChat();
    const result = await chat.sendMessage(history);
    const assistantText = result.response?.text?.() ?? '';

    return res.json({ text: assistantText });
  } catch (error) {
    console.error('Gemini request error:', error);
    return res.status(500).json({ error: 'Failed to fetch Gemini response.' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
