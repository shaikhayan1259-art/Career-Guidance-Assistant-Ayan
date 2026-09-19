# 🎓 Career Guidance Assistant

A responsive **Career Guidance Assistant** web project created for an AI & Data Science internship task.

> **Task:** Develop a career guidance chatbot that helps students with career planning and industry insights.

## ✨ Features

- Responsive career guidance dashboard
- Interactive chatbot-style career assistant
- Quick prompts for:
  - Career roadmap
  - Skills to learn
  - Interview tips
  - Industry insights
- Career profile selectors
- Skill progress indicators
- 30-day career roadmap
- Mobile-friendly layout
- No external frameworks or dependencies

## 📁 Project Structure

```text
career-guidance-assistant/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── assets/
    └── README.md
```

## 🚀 Run Locally

No installation is required.

1. Download or clone the repository.
2. Open `index.html` in a modern browser.

For VS Code, you can use the **Live Server** extension for a local development server.

## 🌐 Deploy with GitHub Pages

1. Create a new GitHub repository named `career-guidance-assistant`.
2. Upload all files from this project.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save the settings.
7. GitHub will provide the live website URL.

## 🧠 How the Chatbot Works

This version uses a lightweight keyword-based JavaScript assistant so it can run entirely in the browser without an API key.

The response logic is in:

```text
script.js
```

To connect a real AI API later, replace the `getResponse()` logic with a secure backend/API integration. Do not put private API keys directly in browser JavaScript.

## 🎯 Internship Requirement Mapping

| Requirement | Implementation |
|---|---|
| Career guidance chatbot | Interactive chat section |
| Career planning | Roadmap and career profile |
| Industry insights | Industry-insight chatbot response |
| Student support | Skills and interview guidance |
| Responsive UI | CSS media queries |
| Working project | HTML + CSS + JavaScript |

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Git / GitHub

## 📌 Future Improvements

- Add real AI API integration through a backend
- Save student profiles
- Add authentication
- Add career recommendations based on profile data
- Add job-market data from trusted APIs
- Add downloadable career plans
- Add database support

## 👨‍💻 Author

**Student Internship Project — Career Guidance Assistant**
