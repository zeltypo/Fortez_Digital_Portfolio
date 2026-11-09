/* ===================================================================
   DENZEL G. FORTEZ - AI CHATBOT ASSISTANT
   Trained on Denzel's Resume, Capstone, Codefest, Tech Stack & OJT Info
   =================================================================== */

const DENZEL_KNOWLEDGE_BASE = {
  about: `Denzel G. Fortez is a fourth-year Bachelor of Science in Information Technology (BSIT) student at STI College Rosario (Section BSIT 704, graduating June 2027). He specializes in Front-End Web Development, responsive UI/UX architecture, mobile layout design (Android XML), and modern API integrations.`,
  
  ojt: `Denzel is actively seeking an On-the-Job Training (OJT) internship position in Front-End / Web Development. He needs to complete 480 hours and is available to start immediately (February 2026 / 2026–2027 term). He is ready to submit school endorsement letters and undergo interviews.`,

  codefest: `At the STI Tagisan ng Talino CODEFEST 2025–2026 (Local Level at STI College Rosario, March 11, 2026), Denzel's team won 2nd Runner-Up! Denzel served as the Front-End Android Developer, responsible for creating the XML UI layout skeletons, Android fragments, pet catalog browsing, and adoption inquiry flows under intense competition time constraints.`,

  capstone: `Denzel is the Team Project Lead and Front-End Developer for his Capstone Project: "Internet Service Application System with AI-Assisted Requirements Screening" (PIGEM). The system features Gemini AI API integration to automatically screen and validate applicant IDs and documents, Gmail API for automated email alerts, Captcha API for bot security, and an administrative monitoring dashboard.`,

  skills: `Denzel's technical competencies include:
• Front-End: HTML5, CSS3, JavaScript (ES6+), React fundamentals, Android XML layout design
• Back-End & DB: Python, Java, C#, PostgreSQL, MySQL/XAMPP, Microsoft SQL Server, SAP Fundamentals
• Tools & Platforms: Git, GitHub, Vercel, Visual Studio, VS Code, Apache NetBeans, Unity 3D, Android Studio, Linux & Windows CLI
• APIs: Google Gemini AI API, Gmail API, Captcha API, GitHub REST API`,

  projects: `Key technical projects built by Denzel:
1. PIGEM - Internet Service Application with Gemini AI Screening (Capstone Lead & Front-End)
2. Vet & Pet Adoption Android App (2nd Runner-Up at STI Codefest 2026)
3. City Driver: Road Safety Challenge (Lead Programmer in Unity 3D / C#)
4. Philippine Group 4 Bank (C# / Visual Studio banking application)
5. Redhub Cake Order Processing System (Java / NetBeans / MySQL)
6. Personal Digital Portfolio (Green-themed responsive SPA with dark mode, GitHub API & AI Chatbot)`,

  certifications: `Verified Certifications & Seminars:
1. 2nd Runner-Up – STI Tagisan ng Talino CODEFEST 2025–2026 (Awarded March 11, 2026)
2. Oracle Academy – Java Fundamentals Award of Course Completion (June 19, 2024, Instructor Beronika Peña)
3. STI TechTalk – Building the Future with AI & Generative AI Ethics (Nov 28, 2025)
4. STI TechTalk – Development of AI & Demo Using Grok (Nov 28, 2025)`,

  contact: `You can reach Denzel directly:
• Email: fortezdenzel@gmail.com
• Phone: +63 916 569 0871 / (0916) 569-0871
• GitHub: https://github.com/zeltypo
• Location: General Trias, Cavite (STI College Rosario)`
};

// Natural language matcher for offline response
function getDenzelBotReply(userText) {
  const q = userText.toLowerCase().trim();

  if (q.includes('ojt') || q.includes('intern') || q.includes('hour') || q.includes('availab') || q.includes('start')) {
    return `📋 <b>OJT & Internship Details:</b><br/>${DENZEL_KNOWLEDGE_BASE.ojt}`;
  }
  
  if (q.includes('codefest') || q.includes('tagisan') || q.includes('vet') || q.includes('pet') || q.includes('runner') || q.includes('award') || q.includes('contest')) {
    return `🏆 <b>STI Tagisan ng Talino CODEFEST:</b><br/>${DENZEL_KNOWLEDGE_BASE.codefest}`;
  }

  if (q.includes('capstone') || q.includes('pigem') || q.includes('internet service') || q.includes('ai-assisted')) {
    return `🚀 <b>Capstone Project (PIGEM):</b><br/>${DENZEL_KNOWLEDGE_BASE.capstone}`;
  }

  if (q.includes('skill') || q.includes('tech stack') || q.includes('language') || q.includes('react') || q.includes('python') || q.includes('java') || q.includes('c#') || q.includes('database')) {
    return `💻 <b>Technical Stack & Skills:</b><br/>${DENZEL_KNOWLEDGE_BASE.skills.replace(/\n/g, '<br/>')}`;
  }

  if (q.includes('project') || q.includes('system') || q.includes('bank') || q.includes('cake') || q.includes('unity') || q.includes('city driver')) {
    return `📁 <b>Featured Projects:</b><br/>${DENZEL_KNOWLEDGE_BASE.projects.replace(/\n/g, '<br/>')}`;
  }

  if (q.includes('cert') || q.includes('oracle') || q.includes('techtalk') || q.includes('training') || q.includes('seminar')) {
    return `📜 <b>Certifications & Honors:</b><br/>${DENZEL_KNOWLEDGE_BASE.certifications.replace(/\n/g, '<br/>')}`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('phone') || q.includes('call') || q.includes('message')) {
    return `📫 <b>Contact Denzel:</b><br/>${DENZEL_KNOWLEDGE_BASE.contact.replace(/\n/g, '<br/>')}`;
  }

  if (q.includes('who') || q.includes('about') || q.includes('denzel') || q.includes('school') || q.includes('sti') || q.includes('graduat')) {
    return `👋 <b>About Denzel Fortez:</b><br/>${DENZEL_KNOWLEDGE_BASE.about}`;
  }

  if (q.includes('resume') || q.includes('cover letter') || q.includes('cv')) {
    return `📄 You can directly view Denzel's <a href="Denzel_Fortez_Resume.pdf" target="_blank" style="color:#10b981;text-decoration:underline;font-weight:bold;">Official Resume (PDF) &nearr;</a> or explore the <a href="resume.html" target="_blank" style="color:#10b981;text-decoration:underline;">Resume Web View &nearr;</a>!`;
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('good day')) {
    return `Hello! 👋 I'm Denzel's AI Portfolio Assistant. Ask me anything about his <b>OJT availability (480 hrs)</b>, his <b>Codefest 2nd Runner-Up app</b>, his <b>PIGEM Capstone project</b>, or his <b>front-end tech stack</b>!`;
  }

  return `Thanks for asking! Denzel is a 4th-year BSIT student at STI College Rosario available for 480 hours of OJT in Front-End Web Development. Would you like to know more about his <b>Codefest award</b>, <b>Capstone project</b>, <b>skills</b>, or <b>contact info</b>?`;
}

// UI Setup & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('chatbotToggle');
  const chatWindow = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('chatbotClose');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const chatMessages = document.getElementById('chatMessages');
  const chipButtons = document.querySelectorAll('.chip-btn');

  if (!toggleBtn || !chatWindow) return;

  // Toggle chat window open/closed
  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      chatInput.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });
  }

  // Append a message to chat UI
  function appendMessage(sender, htmlContent) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = htmlContent;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Handle user send
  async function handleSend(userText) {
    const text = userText || chatInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    if (!userText) chatInput.value = '';

    // Show temporary typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-bubble bot';
    typingIndicator.id = 'typingBubble';
    typingIndicator.innerHTML = '<i>Typing...</i>';
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Check if a Gemini serverless endpoint exists (/api/chat)
    let botReply = '';
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.reply) {
          botReply = data.reply;
        }
      }
    } catch (err) {
      // Fallback cleanly to local knowledge base
    }

    if (!botReply) {
      botReply = getDenzelBotReply(text);
    }

    setTimeout(() => {
      const typ = document.getElementById('typingBubble');
      if (typ) typ.remove();
      appendMessage('bot', botReply);
    }, 400);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => handleSend());
  }

  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Quick Chips
  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = btn.getAttribute('data-prompt');
      handleSend(prompt);
    });
  });
});
