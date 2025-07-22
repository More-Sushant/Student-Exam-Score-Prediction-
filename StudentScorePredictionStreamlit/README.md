## 📊 Student Score Prediction - Streamlit App

This project predicts student exam scores based on various academic, behavioral, and socioeconomic factors using a trained Machine Learning model. The UI is built using **Streamlit**, and the backend includes data preprocessing, model training, and predictions saved via Pickle.

### 🚀 Features:
- Input parameters like Hours Studied, Attendance, Parental Involvement, etc.
- Predicts the expected **Exam Score**
- Supports both Light and Dark Mode themes
- Built with a modern and responsive UI
---

````markdown
## 🔧 Create the Environment on your System (Use COMMAND PROMPT (cmd) for execution)

Make sure Conda is installed. Then run:

```bash
conda env create -f environment.yml
````

If you'd like to give the environment a custom name:

```bash
conda env create -f environment.yml -n custom_env_name
```

---

## ▶️ Activate the Environment

Once the environment is created, activate it using:

```bash
conda activate myenv  # or use the custom name provided above
```

---

## 🧪 Optional: Recreate pip-only Dependencies

If additional pip dependencies were listed in a separate `requirements.txt` file, install them using:

```bash
pip install -r requirements.txt
```

---

## 💡 Tip

After activating the environment, test your project by running your main script (e.g., `streamlit run app.py`) to confirm everything is working as expected.




## 📁 Project Structure

```
StudentScorePredictionStreamlit/
│
├── app.py                    # Main Streamlit App
├── models/                   # Trained pickle model
├── dataset/                  # CSV dataset
├── modules/                  # Preprocessing, prediction, utils
├── requirements.txt          # pip packages
├── environment.yml           # conda environment config
└── README.md                 # Documentation
```

---

## ▶️ Run the Streamlit App

```bash
streamlit run app.py
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
