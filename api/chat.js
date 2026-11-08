// Vercel Serverless Function: /api/chat
// Connects safely to Google Gemini API using GEMINI_API_KEY environment variable.

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // If no key is set in Vercel environment variables, return flag so client uses local knowledge base
    return res.status(200).json({ reply: null, note: 'Using local knowledge base' });
  }

  const systemInstruction = `
You are the AI Portfolio Assistant for Denzel G. Fortez, a 4th-year Bachelor of Science in Information Technology (BSIT) student at STI College Rosario (Section BSIT 704).
Key details about Denzel:
- Goal: Seeking a 480-hour On-the-Job Training (OJT) Internship in Front-End Web Development / IT Solutions (available starting February 2026, graduating June 2027).
- Major Achievement: 2nd Runner-Up in the STI Tagisan ng Talino CODEFEST 2025–2026 (Local Level, March 11, 2026) for front-end Android XML/Java layout skeleton & UI fragments for a Vet and Pet Adoption mobile app.
- Capstone Project: Team Project Lead & Front-End Developer for "Internet Service Application System with AI-Assisted Requirements Screening" (PIGEM) using Gemini AI API, Gmail API, Captcha API, PostgreSQL/MySQL, and Vercel.
- Skills: Front-End (HTML5, CSS3, JavaScript, React basics, Android XML), Back-End & DB (Python, Java, C#, PostgreSQL, MySQL/XAMPP, MS SQL Server, SAP), Tools & OS (Git, GitHub, Vercel, Visual Studio, VS Code, NetBeans, Unity 3D, Linux).
- Certifications: Oracle Academy Java Fundamentals Course Completion, TechTalk AI Machine Learning & Grok.
- Contact: Email fortezdenzel@gmail.com, Phone +63 916 569 0871, GitHub https://github.com/zeltypo, Location: General Trias, Cavite.

Answer recruiter and visitor inquiries concisely, politely, and professionally. Always format responses in clean markdown or bullet points.
`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: `${systemInstruction}\n\nVisitor Question: ${message}` }]
          }
        ]
      })
    });

    if (!geminiRes.ok) {
      return res.status(200).json({ reply: null });
    }

    const data = await geminiRes.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return res.status(200).json({ reply: candidateText || null });
  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(200).json({ reply: null });
  }
}
