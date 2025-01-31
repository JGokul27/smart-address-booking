# Overview
The Smart Address Book is a web application that allows users to add, view, edit, and delete addresses. It includes a feature to auto-fill the city and state fields based on the entered PIN code (limited to India). The application is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and is designed to be responsive and user-friendly.

## Features:
### Add Address: 
Users can add a new address with fields for Address Line 1, City, State, Country, and PIN Code.

### Auto-Fill: 
The city and state fields are auto-filled based on the entered PIN code using the [Postal PIN Code API](https://api.postalpincode.in/).

### View Addresses: 
Users can view all saved addresses in a tabular format with pagination.

### Edit/Delete Addresses: 
Users can edit or delete existing addresses.

### Search: 
Users can filter addresses by city or state using a search bar.

## Technologies Used
### Frontend: React (Vite + Tailwind CSS)

### Backend: Node.js, Express.js

### Database: MongoDB (MongoDB Atlas)

### API: [Postal PIN Code API](https://api.postalpincode.in/) for auto-filling city and state based on PIN code.

#### Prerequisites
Before running the application locally, ensure you have the following installed:

+ Node.js (v16 or higher)

* npm (v8 or higher)

- MongoDB Atlas account (for database)

+ Git (optional, for cloning the repository)

## Steps to Run the Application Locally
### 1. Clone the Repository
### bash
`git clone https://github.com/your-username/smart-address-book.git`
`cd smart-address-book`

### 2. Set Up the Backend
+ Navigate to the backend folder:
### bash
`cd backend`

+ Install dependencies:
### bash
`npm install`

+ Create a .env file in the backend folder and add your MongoDB connection string:
### env
`MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority`
`PORT=5000`

+ Start the backend server:
### bash
`npm start`
The backend will run on http://localhost:5000.

### 3. Set Up the Frontend
+ Navigate to the frontend folder:
### bash
`cd ../frontend`

+ Install dependencies:
### bash
`npm install`

+ Start the frontend development server:
### bash
`npm run dev`
The frontend will run on http://localhost:3000.

### 4. Access the Application
Open your browser and go to http://localhost:3000.
You should see the Smart Address Book application running.

## Folder Structure
```
smart-address-book/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── addressController.js
│   ├── models/
│   │   └── Address.js
│   ├── routes/
│   │   └── addressRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddAddress.js
│   │   │   ├── ViewAddress.js
│   │   │   ├── EditAddress.js
│   │   │   └── SearchBar.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```
