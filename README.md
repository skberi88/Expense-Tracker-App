# 💰 Expense Tracker with Charts (React Project)

A **responsive expense management web application** built using React, JavaScript, and Bootstrap.  
The app allows users to track their daily/monthly expenses, categorize them, and view insightful visualizations with charts.

---

## 🚀 Features
- Add, edit, and delete expenses with date, amount, and category.
- Categorize expenses (e.g., Food, Travel, Shopping, Bills, Others).
- View **summary reports** with interactive charts:
  - Pie Chart: Category-wise breakdown.
  - Bar/Line Chart: Monthly spending trends.
- Responsive and user-friendly UI.
- Persistent data storage using LocalStorage (can be extended to backend/Firebase).

---

## 🛠️ Tech Stack
- **Frontend**: React, JavaScript, Bootstrap
- **Charts**: Recharts (or Chart.js)
- **State Management**: React Hooks & useState
- **Data Storage**: LocalStorage (or can integrate Firebase/Node backend)

---

## 📂 Project Structure
Expense-Tracker/
│── public/
│── src/
│ │── components/
│ │ ├── ExpenseForm.js
│ │ ├── ExpenseList.js
│ │ ├── Chart.js
│ │── App.js
│ │── index.js
│── package.json
│── README.md

## ▶️ How to Run

1. Clone this repository
2. Navigate to the folder:
   cd Expense-Tracker
3. Install dependencies:
   npm install
4. Run the application:
   npm start
5. Open in browser(automatically opens):
   http://localhost:3000

## 🎯 Future Enhancements
1. User authentication (login/signup).
2. Connect with a backend.
3. Export reports to PDF/CSV.
4. Budget setting & notifications.
