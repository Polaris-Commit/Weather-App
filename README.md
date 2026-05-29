# Live Weather Web Application

A lightweight, production-ready frontend web application that fetches real-time weather data from the OpenWeatherMap API. Built to demonstrate clean asynchronous JavaScript architecture, robust error handling, and DOM manipulation.

## 🚀 Features
- **Real-Time Data:** Fetches live temperature, city name, and weather descriptions.
- **Input Validation:** Input field validation to prevent empty queries from triggering unnecessary API overhead.
- **Robust Error Handling:** Status code verification (`response.ok`) ensuring graceful failures and user-friendly alerts for invalid city inputs (404 errors).
- **Responsive Formatting:** Automatic metric parsing converting data from Kelvin to exact Celsius round figures using mathematical utilities.

## 🛠️ Tech Stack & Concepts Demonstrated
- **Frontend:** HTML5, CSS3
- **Scripting:** Asynchronous JavaScript (ES6+)
- **API Integration:** Native Fetch API with Promise Chaining (`.then()`)
- **JSON Parsing:** Client-side object stream decoding
- **Code Consistency:** Formatted using industry-standard Prettier standards

## 📂 Project Structure
```text
├── index.html       # Application layout and structural DOM nodes
├── style.css        # User interface styling and core layout
├── script.js        # Event listeners, API integration, and error boundaries
└── README.md        # Technical project documentation