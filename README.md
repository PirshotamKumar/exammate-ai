# ExamMate AI – Your AI Exam Preparation Assistant

**ExamMate AI** is a web-based study tool that helps students turn their lecture notes into interactive quizzes, flashcards, and key concept summaries using the power of AI.

## Real Problem It Solves
Students often spend hours re-reading notes without active recall. ExamMate AI transforms passive study material into active learning tools, making exam preparation more effective and engaging.

## Live URL
[Click here to use the app](https://your-app-name.vercel.app)  <!-- REPLACE THIS WITH YOUR VERcel URL -->

## Features
- 📝 **Paste Study Notes** – Add any text material.
- ❓ **AI-Generated Quizzes** – Create multiple-choice questions with explanations.
- 🃏 **Flashcards** – Generate term/definition pairs for memorization.
- 💡 **Key Concepts** – Extract the most important ideas from your notes.
- 📊 **Progress Tracker** – See how many quizzes, flashcards, and concepts you have generated.

## The AI Feature
The app uses **DeepSeek API** (`deepseek-chat` model) to generate educational content.

**System Prompt (Example):**
> *"Generate 5 multiple choice questions based on the notes. Return valid JSON with a 'questions' array. Each question object must have: question (string), options (array of 4 strings), correct (number 0-3), explanation (string)."*

## Tools & Technologies
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Vercel Serverless Functions (Node.js)
- **AI Model:** DeepSeek (`deepseek-chat`)
- **Hosting:** Vercel

## Screenshots
![Screenshot 1](screenshot1.png) <!-- Add your screenshots -->
![Screenshot 2](screenshot2.png)
![Screenshot 3](screenshot3.png)

## How to Run Locally
1. Clone the repository: `git clone https://github.com/yourusername/exammate-ai.git`
2. Install dependencies: `npm install` (though none are required)
3. Create a `.env` file with `DEEPSEEK_API_KEY=your-key`
4. Run `vercel dev` to start a local server.