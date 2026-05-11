import { GoogleGenerativeAI } from '@google/generative-ai';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const apiKey = process.env.GEMINI_API_KEY;

const systemInstruction =
  'You are the DevStudio AI Assistant. Your job is to help the user build a website using one of our 6 templates (Portfolio, SaaS, Restaurant, E-Commerce, Dashboard, Blog). Be concise, professional, and encourage them to pick a template if they haven\'t already.';

function formatMessageHistory(messages: ChatMessage[]) {
  return messages.map((message) => {
    const prefix = message.role === 'user' ? 'User:' : 'Assistant:';
    return `${prefix} ${message.content}`;
  });
}

export async function POST(request: Request) {
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Missing Gemini API key in environment.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const body = await request.json().catch(() => null);
  const messages = Array.isArray(body?.messages) ? body.messages : [];

  if (!messages.length) {
    return new Response(
      JSON.stringify({ error: 'Request body must include a non-empty messages array.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const history = formatMessageHistory(messages);
  const client = new GoogleGenerativeAI(apiKey);
  const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const chat = model.startChat();
  const result = await chat.sendMessage([systemInstruction, ...history]);
  const assistantText = result.response?.text?.() ?? '';

  return new Response(JSON.stringify({ text: assistantText }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
