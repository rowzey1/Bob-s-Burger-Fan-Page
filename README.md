# Bob's Burgers Fan Site

A full-stack web application that allows users to explore and favorite characters from Bob's Burgers. Built with Node.js, Express, and MongoDB.
<img width="1236" alt="Screenshot 2024-11-18 at 9 23 01 PM" src="https://github.com/user-attachments/assets/50046edf-890c-47bb-9201-6853fd8aae24">

<img width="1236" alt="Screenshot 2024-11-18 at 9 21 58 PM" src="https://github.com/user-attachments/assets/d19e31ec-b552-469d-8d99-8e144d9f5b55">


## Features

- User authentication (signup/login)
- Display 20 random Bob's Burgers characters
- Add characters to favorites
- Remove characters from favorites

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, EJS, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Passport.js
- **API**: Bob's Burgers API

## Setup

1. Clone the repository
2. Install dependencies
3. Create a `config/database.js` file with your MongoDB connection string
4. Start the server
5. Visit `http://localhost:8080` in your browser

## Environment Variables

Create a `.env` file in the root directory with:
- PORT (Defaults to 8080)
- Your MongoDB connection details

## API Reference

This project uses the [Bob's Burgers API](https://bobsburgers-api.herokuapp.com/) to fetch character data.

## Authentication

- Local authentication strategy using email/password
- Session-based authentication
- Password hashing for security

## Routes

### Public Routes
- `GET /` - Home page
- `GET /login` - Login page
- `GET /signup` - Signup page

### Protected Routes
- `GET /profile` - User profile and characters
- `POST /favorites` - Add character to favorites
- `DELETE /favorites` - Remove character from favorites
- `GET /logout` - Logout user

