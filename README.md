HabitFlow – Habit Tracking Web App
HabitFlow is a simple habit-tracking website where users can create habits, track progress, and build daily streaks. It includes authentication, private routes, habit management, and a clean responsive UI.

Live Links
• Client:
• Server:

Features:

• User login, signup, and Google sign-in
• Private routes for Add Habit, My Habits, Habit Details, Update Habit
• Create, update, delete habits
• Mark habits as complete (with streak calculation)
• Browse all public habits with search and filters
• Habit details page with image, progress bar, and streak info
• Home page includes slider, featured habits, and several info sections
• Custom 404 page
• Fully responsive and built with Tailwind & daisyUI
• All notifications shown using toast

Tech Used:
• React, React Router
• Firebase Authentication
• Node.js, Express.js, MongoDB
• Tailwind CSS, daisyUI
• Toastify, Framer Motion

How to Run:

Client:
npm install
npm run dev

Server:
npm install
npm run dev
Environment Variables
Create a .env file:

Client
VITE_SERVER_URL=your_server_url
Firebase keys...
Server
MONGO_URI=your_mongo_uri
PORT=3000
Main Pages
• Home
• Add Habit (private)
• My Habits (private)
• Browse Public Habits
• Habit Details (private)
• Update Habit (private)
• Login / Signup
• 404
Server API
• POST /habits – create habit
• GET /habits – latest 6 public habits
• GET /public-habits – all public habits
• GET /my-habits?email= – habits of logged-in user
• GET /habits/:id – habit details
• PATCH /habits/:id – update habit
• DELETE /habits/:id – delete habit
• PATCH /habits/:id/complete – mark complete + streak update
