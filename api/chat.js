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

  const systemInstruction = `Answer questions using only these résumé facts. Denzel G. Fortez BSIT Student &bull; Web and Software Development Intern Candidate STI College Rosario, Cavite View Resume Send Email ☀️ 🌙 About Me I am a fourth-year Bachelor of Science in Information Technology student at STI College Rosario seeking an OJT or internship in web and software development. I have experience guiding developer teams, building full-stack web and mobile applications, integrating databases, and designing user interfaces. I want to contribute dependable code, learn industry standards from experienced developers, and support production systems. Education Bachelor of Science in Information Technology STI College Rosario (2023 &ndash; 2027) Experience Freelance Digital Product Provider 2024 &ndash; 2025 Managed product listings on online marketplaces and in community groups, answered international buyer inquiries, prepared PayPal invoices, and designed promotional banners in Canva. Skills &amp; Stacks Programming Languages Java Python C# JavaScript Web Development HTML5 CSS3 ASP.NET Database Technologies MySQL PostgreSQL Supabase Development and Version Control Tools Visual Studio Code Visual Studio Android Studio Git GitHub AI and Emerging Technologies AI Prompt Engineering Intelligent Document Processing (IDP) OpenAI API Integration IT Fundamentals Computer Networking Cybersecurity Data Privacy Cloud Computing (AWS) Soft Skills Communication Adaptability Empathy Teamwork Projects Internet Service Application System with AI-Assisted Requirements Screening As team lead and full-stack developer (2025–2026), I led development of an application that uses GPT-5.4, GPT-6.2-sol, Azure Document Intelligence, and Dynamsoft Image Enhancer to assess applications, support business decisions, and improve ID image quality. PostgreSQL stores applications. I integrated LocationIQ map pinning, Gmail API notifications, and CAPTCHA protection with a FastAPI backend. Web AI-assisted screening Gmail API PostgreSQL FastAPI I.S.I.P. &mdash; Instant Species Identification Portable Collaborated with a five-member team in 2024–2025 to design and build an Android application that identifies animal species from captured photos. Mobile Android Image Recognition Team Project City Driver: Road Safety Challenge As lead programmer in 2026, I built a Unity 3D driving simulation in C# to teach road signs, traffic signals, and pedestrian safety. Unity 3D C# Road Safety Certificates Building the Future with AI, Powering the Next-Gen Innovators TechTalk &bull; STI College Rosario &bull; November 2025 Explored how industries use AI in daily work and how AI supports innovation and future technologies. View full certificate &rarr; Development of AI and Demo Using Grok TechTalk &bull; STI College Rosario &bull; November 2025 Learned how Grok processes information and how AI tools support productivity and problem-solving. View full certificate &rarr; Java Fundamentals Oracle Academy &bull; 2024-06 View full certificate &rarr; STI Tagisan ng Talino CODEFEST (2nd Place) STI College Rosario &bull; 2026-03 View full certificate &rarr; Best in Booth and Best in Communication Culminating Activity · STI College Rosario · 2023 Goals Grow my practical skills by building real-world web and mobile applications. Improve through teamwork, continuous learning, and mentorship from experienced developers. Social Links LinkedIn GitHub Digital Portfolio Contact Actively seeking an OJT / internship opportunity. Get in touch &rarr; Let's Talk Email fortezdenzel@gmail.com &rarr; Let's Talk (0916) 569-0871 &rarr;`;

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
