# app.py
import streamlit as st
import pandas as pd
import pickle
import matplotlib.pyplot as plt
import seaborn as sns

# Load model
with open("./models/student_score_model.pkl", "rb") as f:
    model = pickle.load(f)

st.set_page_config(page_title="Student Exam Score Predictor", layout="centered")
st.title("📈 Student Exam Score Predictor")

def user_input_features():
    return {
        "Hours_Studied": st.slider("Hours Studied", 0, 15, 5),
        "Attendance": st.slider("Attendance (%)", 0, 100, 75),
        "Parental_Involvement": st.selectbox("Parental Involvement", ["Low", "Medium", "High"]),
        "Access_to_Resources": st.selectbox("Access to Resources", ["Low", "Medium", "High"]),
        "Extracurricular_Activities": st.selectbox("Extracurricular Activities", ["Yes", "No"]),
        "Sleep_Hours": st.slider("Sleep Hours", 0, 12, 7),
        "Previous_Scores": st.slider("Previous Scores", 0, 100, 60),
        "Motivation_Level": st.selectbox("Motivation Level", ["Low", "Medium", "High"]),
        "Internet_Access": st.selectbox("Internet Access", ["Yes", "No"]),
        "Tutoring_Sessions": st.slider("Tutoring Sessions per week", 0, 10, 2),
        "Family_Income": st.selectbox("Family Income", ["Low", "Medium", "High"]),
        "Teacher_Quality": st.selectbox("Teacher Quality", ["Low", "Medium", "High"]),
        "School_Type": st.selectbox("School Type", ["Public", "Private"]),
        "Peer_Influence": st.selectbox("Peer Influence", ["Low", "Medium", "High"]),
        "Physical_Activity": st.slider("Physical Activity (hrs/week)", 0, 20, 5),
        "Learning_Disabilities": st.selectbox("Learning Disabilities", ["Yes", "No"]),
        "Parental_Education_Level": st.selectbox("Parental Education Level", ["High School", "Bachelor", "Master", "PhD"]),
        "Distance_from_Home": st.selectbox("Distance from Home", ["Near", "Moderate", "Far"]),
        "Gender": st.selectbox("Gender", ["Male", "Female"]),
    }

input_data = user_input_features()

if st.button("🔍 Predict Exam Score"):
    input_df = pd.DataFrame([input_data])
    try:
        prediction = model.predict(input_df)[0]
        st.success(f"Predicted Exam Score: {prediction:.2f}")
    except Exception as e:
        st.error(f"Prediction Failed: {e}")

    
    try:
        df = pd.read_csv("./dataset/StudentExamScores1.csv")
        
        # 🔧 Extract values from input_data for visualization and suggestions
        hours_studied = input_data["Hours_Studied"]
        attendance = input_data["Attendance"]
        parental_involvement = input_data["Parental_Involvement"]
        internet_access = input_data["Internet_Access"]
        tutoring_sessions = input_data["Tutoring_Sessions"]
        sleep_hours = input_data["Sleep_Hours"]
        motivation_level = input_data["Motivation_Level"]
        physical_activity = input_data["Physical_Activity"]

        st.subheader("📊 Data Insights")

        # Correlation Heatmap
        st.markdown("#### 🔗 Feature Correlation")
        corr = df.corr(numeric_only=True)
        fig, ax = plt.subplots(figsize=(10, 6))
        sns.heatmap(corr, annot=True, cmap="coolwarm", ax=ax)
        st.pyplot(fig)

        # Exam Score Distribution
        st.markdown("#### 📈 Exam Score Distribution")
        fig2, ax2 = plt.subplots()
        sns.histplot(df['Exam_Score'], kde=True, ax=ax2, bins=30, color="skyblue")
        plt.axvline(prediction, color='red', linestyle='--', label="Your Score")
        plt.legend()
        st.pyplot(fig2)

        # Hours Studied vs Exam Score
        st.markdown("#### ⏱️ Hours Studied vs Exam Score")
        fig3, ax3 = plt.subplots()
        sns.scatterplot(data=df, x="Hours_Studied", y="Exam_Score", hue="Motivation_Level", ax=ax3)
        plt.axvline("Hours_Studied", color='orange', linestyle='--', label="You")
        plt.legend()
        st.pyplot(fig3)


        # Suggestion Section
        st.subheader("💡 Smart Suggestions for Improvement")

        suggestions = []

        if hours_studied < 2:
            suggestions.append("Increase your daily study hours to at least 3–4.")
        if attendance < 75:
            suggestions.append("Improve class attendance for better continuity.")
        if parental_involvement == "Low":
            suggestions.append("Encourage parental engagement.")
        if internet_access == "No":
            suggestions.append("Ensure reliable internet access for e-learning.")
        if tutoring_sessions < 2:
            suggestions.append("Consider regular tutoring sessions.")
        if sleep_hours < 6:
            suggestions.append("Aim for 6–8 hours of sleep for better mental performance.")
        if motivation_level == "Low":
            suggestions.append("Set small goals to stay motivated.")
        if physical_activity < 2:
            suggestions.append("Include light physical activity weekly.")
        if not suggestions:
            st.success("You are on the right track! Keep maintaining your good habits.")
        else:
            for tip in suggestions:
                st.markdown(tip)
    except Exception as e:
        st.error(f"Plotting Failed: {e}")