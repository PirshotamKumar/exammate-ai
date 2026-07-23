// api/generate.js
export default async function handler(req, res) {
    // 1. Accept only POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // 2. Get the prompt and system prompt from the request body
    const { prompt, systemPrompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Missing prompt' });
    }

    // 3. Read the API key from environment variables (set in Vercel)
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Missing DeepSeek API key' });
    }

    try {
        // 4. Call DeepSeek API (OpenAI-compatible format)
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'deepseek-chat',          // You can also use 'deepseek-reasoner'
                messages: [
                    { role: 'system', content: systemPrompt || 'You are a helpful exam assistant.' },
                    { role: 'user', content: prompt },
                ],
                temperature: 0.7,
                max_tokens: 1500,
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`DeepSeek API error (${response.status}): ${errText}`);
        }

        const data = await response.json();
        const result = data.choices?.[0]?.message?.content;
        if (!result) throw new Error('No content in response');

        // 5. Return the AI-generated text to the frontend
        return res.status(200).json({ result });
    } catch (error) {
        console.error('DeepSeek error:', error);
        return res.status(500).json({ error: error.message || 'AI generation failed' });
    }
}