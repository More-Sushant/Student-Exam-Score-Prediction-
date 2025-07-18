from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model and scaler
try:
    with open('models/Scaler.pkl', 'rb') as f:
        scaler = pickle.load(f)
    with open('models/model.pkl', 'rb') as f:
        model = pickle.load(f)
    print("Models loaded successfully!")
except Exception as e:
    print(f"Error loading models: {e}")
    scaler, model = None, None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        hours_studied = float(data.get('hoursStudied', 0))
        previous_score = float(data.get('previousScore', 0))
        attendance = float(data.get('attendance', 0))

        features = np.array([[hours_studied, previous_score, attendance]])

        if scaler:
            scaled_features = scaler.transform(features)
        else:
            return jsonify({'error': 'Scaler not loaded'}), 500

        if model:
            prediction = model.predict(scaled_features)
            score = float(prediction[0])
            score = max(0, min(100, score))  # Clamp to 0-100
            return jsonify({'predictedScore': round(score, 2), 'success': True})
        else:
            return jsonify({'error': 'Model not loaded'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'models_loaded': model is not None and scaler is not None})

if __name__ == '__main__':
    app.run(debug=True)
