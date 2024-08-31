### Asset Management System
A simple asset management system built with React and Express, utilizing a MySQL database. This project includes a frontend React application for searching and displaying assets, and a backend Express server for handling database operations.

## Features
Search for assets across title field.
Display search results in a user-friendly interface.
Manage assets and users with simple CRUD operations.
## Technologies Used
# Frontend:

React
CSS
# Backend:

# Have Node.js installed 
https://nodejs.org/en
Express
MySQL
CORS
dotenv

## Getting Started
# Prerequisites
Node.js (v14 or later)
MySQL server
An environment file (.env) with database credentials
Setup
Clone the Repository

# terminal
Copy code
git clone https://github.com/Methryl/University-Inventory-Management
cd University-Inventory-Management

# Backend Setup

Navigate to the backend directory:

# terminal
Copy code
cd server

Install dependencies:

# terminal
Copy code
npm install
Create a .env file in the backend directory with the following content (replace with your actual database credentials):


Copy code
create a .env file in server 
DB_PORT = 
DB_USER = 
DB_PASSWORD = 
DB = ''


# needs to be installed befored starting the server
### cd server:
npm install express
npm install mysql2
npm install dotenv
npm install cors

# start server
node index.js

The backend server will run on http://localhost:3001.

## Frontend Setup

Navigate to the frontend directory:


# terminal
Copy code
cd client
cd xu-inventory-website/

Install dependencies:(dont need if already in file)

# terminal
Copy code
npm install

## Start the React application:

# terminal
Copy code
npm start
The frontend application will run on http://localhost:3000.


# API Endpoints
GET /assets
Retrieve a list of assets. Can include query parameters for searching.

Query Parameters:

query (string): Search term to look for in title, asset ID, company, asset type, and serial number.
Response:

Array of asset objects.
POST /assets
Add a new asset.

Request Body:

title (string)
asset_id (string)
company (string)
asset_type (string)
serial_number (string)
assigned_to (integer, optional)
Response:

Confirmation of the insertion.
GET /users
Retrieve a list of users. Can include query parameters for searching by ID.

Query Parameters:

id (integer, optional): User ID to filter results.
Response:

Array of user objects.
POST /users
Add a new user.

Request Body:

name (string)
sname (string)
mail (string)
Response:

Confirmation of the insertion.