from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import logging

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Load models at startup
try:
    with open('models/Scaler.pkl', 'rb') as f:
        scaler = pickle.load(f)
    with open('models/model.pkl', 'rb') as f:
        model = pickle.load(f)
    print("Models loaded successfully!")
except Exception as e:
    print(f"Error loading models: {e}")
    scaler, model = None, None

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from request
        data = request.get_json()
        
        # Extract features
        hours_studied = float(data.get('hoursStudied', 0))
        previous_score = float(data.get('previousScore', 0))
        attendance = float(data.get('attendance', 0))
        
        # Prepare features array
        features = np.array([[hours_studied, previous_score, attendance]])
        
        # Scale features
        if scaler is not None:
            scaled_features = scaler.transform(features)
        else:
            return jsonify({'error': 'Scaler not loaded'}), 500
        
        # Make prediction
        if model is not None:
            prediction = model.predict(scaled_features)
            score = float(prediction[0])
            
            # Ensure score is within valid range
            score = max(0, min(100, score))
            
            return jsonify({
                'predictedScore': round(score, 2),
                'success': True
            })
        else:
            return jsonify({'error': 'Model not loaded'}), 500
            
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'models_loaded': model is not None and scaler is not None})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
