const responses = [
  {
    keywords: ["roadmap", "plan", "career"],
    answer: "A practical roadmap is: 1) choose a target role, 2) identify its core skills, 3) practise through a small project, 4) document the project in your portfolio, 5) prepare for interviews, and 6) apply while tracking skill gaps."
  },
  {
    keywords: ["skill", "skills", "learn"],
    answer: "Start with role-specific fundamentals and then learn the tools used in that role. For CNC/manufacturing: CNC programming, G-code/M-code, measurement, tooling, CAD/CAM and quality control. For data roles: Python, SQL, statistics, data cleaning and machine learning basics."
  },
  {
    keywords: ["interview", "resume", "cv"],
    answer: "For interviews, prepare a short introduction, technical fundamentals, project questions and common HR questions. Keep your resume focused on relevant skills, projects and measurable results."
  },
  {
    keywords: ["industry", "insight", "future", "job"],
    answer: "Industry needs vary by role and location. Compare several recent job descriptions for your target role, note repeated skills, and build projects around those skills. Salary and hiring numbers should always be checked for the relevant location and date."
  },
  {
    keywords: ["cnc", "machinist", "manufacturing"],
    answer: "For CNC/manufacturing, a useful learning sequence is: safety → measurement/metrology → CNC basics → G-code/M-code → machine setup → tooling → CAD/CAM → quality control → automation basics."
  },
  {
    keywords: ["data", "ai", "python", "sql"],
    answer: "For AI/Data Science, start with Python and SQL, then statistics, data cleaning, visualization and machine-learning fundamentals. Build projects and learn Git/GitHub alongside your technical skills."
  }
];

function getResponse(question) {
  const q = question.toLowerCase();
  const match = responses.find(item =>
    item.keywords.some(keyword => q.includes(keyword))
  );
  return match
    ? match.answer
    : "I can help with career roadmaps, skills, projects, resumes, interviews and industry insights. Tell me your qualification, interest area and target job.";
}

function addMessage(text, type) {
  const chat = document.querySelector("#chat");
  const wrapper = document.createElement("div");
  wrapper.className = `message ${type}`;

  if (type === "bot") {
    wrapper.innerHTML = `<strong>Career Assistant</strong><p>${escapeHtml(text)}</p>`;
  } else {
    wrapper.innerHTML = `<p>${escapeHtml(text)}</p>`;
  }

  chat.appendChild(wrapper);
  chat.scrollTop = chat.scrollHeight;
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function submitQuestion(question) {
  const cleaned = question.trim();
  if (!cleaned) return;

  addMessage(cleaned, "user");

  window.setTimeout(() => {
    addMessage(getResponse(cleaned), "bot");
  }, 300);
}

document.querySelector("#chat-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  submitQuestion(input.value);
  input.value = "";
  input.focus();
});

document.querySelectorAll("[data-prompt]").forEach(button => {
  button.addEventListener("click", () => submitQuestion(button.dataset.prompt));
});
