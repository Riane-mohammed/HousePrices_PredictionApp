# Bangalore Home Price Estimator

## Overview

This project is a web-based house price estimator for properties in Bangalore, India. It leverages a machine learning model to predict house prices based on various input parameters such as square footage, number of rooms, bathrooms, balcony count, and location.

## Features

- **User-friendly Interface**: The web interface allows users to input property details easily.
  
- **Location-based Estimation**: The model takes into account the location of the property, offering more accurate predictions.

- **Dynamic Dropdowns**: Users can select from a list of available locations using dynamically populated dropdowns.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (jQuery)
  
- **Backend**: Python, Flask
  
- **Machine Learning**: Scikit-learn, NumPy
  
## Project Structure

- **client**: Contains the frontend HTML, CSS, and JavaScript files.

- **server**: Houses the Flask server responsible for handling requests and serving predictions.

- **server/util.py**: Python module containing the machine learning model and utility functions.

## Setup Instructions

1. Install required Python packages: `pip install -r requirements.txt`

2. Run the Flask server: `python server/server.py`

3. Open `http://localhost:8000/client/index.html` in your browser.
