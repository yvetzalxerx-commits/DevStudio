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
const model = client.getGenerativeModel({
  model: 'gemini-2.5-flash',
  systemInstruction: `You are the DevStudio Senior Web Architect. You help users build websites using HTML, CSS, and JavaScript.

When the user describes a site or a change, you MUST provide the full, updated code.

ALWAYS wrap HTML in \`\`\`html blocks, CSS in \`\`\`css blocks, and JavaScript in \`\`\`javascript blocks.

Continue providing full code blocks for every change, but keep your conversational text brief. I have hidden the code blocks from the user interface, so simply tell the user what you have updated (e.g., 'I've updated the button color for you').

If the user hasn't picked a template yet (Portfolio, SaaS, Restaurant, E-Commerce, Dashboard, Blog), suggest they start with one.`,
});

app.post('/api/chat', async (req, res) => {
  const messages = Array.isArray(req.body?.messages) ? req.body.messages : null;
  const currentTemplate = req.body?.currentTemplate || null;
  const currentCode = req.body?.currentCode || null;

  if (!messages || !messages.length) {
    return res.status(400).json({ error: 'Expected a non-empty messages array.' });
  }

  // Build context block about the user's current project
  let contextMessage = '';
  if (currentTemplate || (currentCode && (currentCode.html || currentCode.css || currentCode.js))) {
    contextMessage =
      `[CURRENT PROJECT CONTEXT]\n` +
      `Template: ${currentTemplate || 'Untitled'}\n\n` +
      `Current HTML:\n\`\`\`html\n${currentCode?.html || ''}\n\`\`\`\n\n` +
      `Current CSS:\n\`\`\`css\n${currentCode?.css || ''}\n\`\`\`\n\n` +
      `Current JavaScript:\n\`\`\`javascript\n${currentCode?.js || ''}\n\`\`\`\n\n` +
      `When the user requests changes, modify this code and return the FULL updated HTML, CSS, and JS in proper code fences.`;
  }

  try {
    // Separate past messages from the latest user message
    const pastMessages = messages.slice(0, -1);
    const latestMessage = messages[messages.length - 1];

    // Format past messages into Gemini's expected history format
    const formattedHistory = pastMessages.map((message) => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    }));

    // Gemini requires history to start with a 'user' role — skip any leading 'model' messages
    const firstUserIndex = formattedHistory.findIndex((m) => m.role === 'user');
    const validHistory = firstUserIndex !== -1 ? formattedHistory.slice(firstUserIndex) : [];

    // Build the power prompt: context + latest user message
    const latestContent = latestMessage?.content || '';
    const powerPrompt = contextMessage
      ? `${contextMessage}\n\n${latestContent}`
      : latestContent;

    console.log('Final Sent Prompt:', powerPrompt);

    // Start chat with the conversation history (trimmed to start with user role)
    const chat = model.startChat({ history: validHistory });
    // Send the power prompt as the current message
    const result = await chat.sendMessage(powerPrompt);
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
