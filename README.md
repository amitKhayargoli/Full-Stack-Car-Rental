# LODEX - Car Rental Website 🚗

Welcome to **LODEX**, the ultimate platform to **rent your dream car**! Built on the powerful **PERN stack** (PostgreSQL, Express.js, React, Node.js), LODEX brings you a seamless and efficient car rental experience. Whether you're planning a road trip or need a car for an event, LODEX is your go-to platform.

## 🚀 Features

- **User-Friendly Interface**: A sleek, modern UI designed with **React.js** to ensure a smooth user experience.
- **Real-Time Booking**: Rent your car instantly with live availability and booking updates.
- **Secure Authentication**: Sign in securely using **JWT** (JSON Web Tokens) and **bcrypt** encryption.
- **Car Search**: Filter available cars based on type, price, location, and availability.
- **Admin Panel **: Manage car listings, user requests, and bookings.

## 🔧 Technologies Used

- **PostgreSQL**: A reliable relational database for managing user data, bookings, and car listings.
- **Express.js**: A minimal and flexible Node.js web application framework for creating robust backend APIs.
- **React.js**: The front-end framework used to build a dynamic, fast, and responsive user interface.
- **Node.js**: A powerful JavaScript runtime to handle backend logic and API requests.
- **JWT (JSON Web Tokens)**: For secure user authentication and session management.

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/amitKhayargoli/MERN-Lodex.git

```

Backend Setup
Navigate to the backend directory:
  
```bash

cd backend
```

Install the dependencies:

```bash

npm install
```

Set up environment variables in a .env file (you can refer to .env.example):


```bash
DB_HOST=localhost
DB_PORT=5000
DB_USER=yourusername
DB_PASSWORD=yourpassword
secretkey=yoursecret
expiresIn=1h
```


Run the backend server:



```bash

npm start

```
Frontend Setup
Navigate to the frontend directory:
```bash

cd frontend
```
Install the dependencies:

```bash
npm install


```
Run the frontend server:

```bash


npm run dev

```
🔒 Security
Password Encryption: User passwords are securely hashed with bcrypt before being stored in the database.
JWT Authentication: Token-based authentication ensures that only authorized users can access certain routes.

📱 Screenshots
The sleek homepage where users can browse and rent cars.

![image](https://github.com/user-attachments/assets/a0c2e464-840f-4bed-be76-359bdafdf1bf)

Detailed view of the car with all necessary information, availability, and rental options.

💡 Roadmap
 Admin Panel: A dashboard for admin users to manage car listings and user bookings.
 User Reviews: Users can rate and leave reviews for cars.
 Geolocation Feature: Users can filter cars based on their location.
📜 License
Distributed under the MIT License. See LICENSE for more information.

🤝 Contributing
We welcome contributions! If you'd like to contribute to LODEX, please fork the repository and submit a pull request.

🧑‍💻 Authors
Amit Khayargoli - Project Lead and Developer


🧑‍💻Group Members
Aryan Nakarmi
Asrim Suwal 
Ishan Rajdhami
Amit Khayargoli


🗨️ Feedback
If you have any questions or suggestions, feel free to open an issue or reach out via email at khayargoliamit99@gmail.com.
