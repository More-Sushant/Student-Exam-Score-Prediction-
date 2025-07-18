# 🎓 Student Exam Score Predictor (React)

A responsive React web application that predicts student exam scores based on input features like study hours, attendance, and past performance.

---

## 🚀 Features

- 📋 User-friendly form to input student data (study hours, attendance rate, previous grades, etc.)
- 🤖 Connects to a backend ML model via API (e.g., Flask, FastAPI)
- 📈 Displays predicted exam score
- ⚙️ Client-side validation and error handling
- 🎨 Modern, responsive design using React

---

## 🧱 Tech Stack

| Frontend         | Backend (optional)         | Model                     |
|------------------|----------------------------|---------------------------|
| React (CRA)      | Flask / FastAPI            | Scikit-learn / joblib     |
| Axios / Fetch    | REST API                   | Trained regression model  |


---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/More-Sushant/Student-Exam-Score-Prediction.git
cd Student-Exam-Score-Prediction
````

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Start React development server

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## 🔧 Backend Setup (Optional)

If you are running a local Python backend with the trained ML model:

```bash
cd backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

This will start the backend server at `http://localhost:5000`.

---

## 🧠 ML Model Details

* **Type**: Regression
* **Algorithm**: Linear Regression / Random Forest
* **Features Used**:

  * Study Hours
  * Attendance Rate
  * Previous Scores
* **Target**: Final Exam Score
* Model is trained using Scikit-learn and serialized using `pickle`.

---

## 📂 Project Structure

```
Student-Exam-Score-Prediction/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│
├── backend/                 # Optional
│   ├── app.py
│   ├── model.pkl
│   ├── requirements.txt
│
├── model/                   # Optional
│   ├── training.ipynb
│   └── dataset.csv
│
├── screenshots/
├── .gitignore
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repo
2. Create a new branch (`git checkout -b feature-xyz`)
3. Commit your changes (`git commit -m 'Add feature xyz'`)
4. Push to the branch (`git push origin feature-xyz`)
5. Open a Pull Request

---

## 📫 Contact

**Sushant More**

* GitHub: [@More-Sushant](https://github.com/More-Sushant)
* Email: [sushantmorework@gmail.com](mailto:sushantmorework@gmail.com)
* LinkedIn: [linkedin](https://linkedin.com/in/sushant-more-profile)

---

Thanks for reading ❤️
Ready to connect and build 😊
