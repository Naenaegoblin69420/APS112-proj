import { GoogleGenerativeAI } from '@google/generative-ai';

function getClient() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error('GEMINI_API_KEY environment variable is not set');
  return new GoogleGenerativeAI(key);
}

export const geminiPro = {
  generateContent: (prompt: string) => getClient().getGenerativeModel({ model: 'gemini-2.5-flash' }).generateContent(prompt),
};
