# proFIT_api
This is a RESTful API project for a fitness company. This API has CRUD functionality and will power the frontend of the application. It is build with **Nodejs**, **MongoDB** and **Redis** and will help individuals work towards achieving wellness.

# Features
1. **User Roles:** Support roles for users/customers to book and engage with sessions, trainers that manage sessions, and the administrators.
2. **Session Management:** Trainers and administrators can create and manage sessions.
3. **Real Time Notification:** Notify users in real time about goal achievements. 

# Table Of Content
1. [Installation](#installation)
2. [Environment Variables](#environment-variables)
3. [Database Setup](#database-setup)
4. [Running the Application](#running-the-application)
5. [External Dependencies](#external-dependencies)
6. [Deployment to AWS](#deployment-to-AWS)

## Installation
To run this application locally, follow the following steps;
**Clone the Repository;**
```bash
git clone
cd proFIT_API
```
**Install Dependencies;**
```bash
npm install
```
**Set up environment variables;**
create a `.env` file in the root directory

## Environment Variables
The application uses environment variables added to the `.env` file.

## Database Setup
**MongoDB Setup**
1. Install MongoDB and start a MongoDB instance.
2. Connect your instance using the `Mongo_URI` in the `.env` file.
**Redis Setup**
1. Install Redis locally
2. Configure Redis using the `REDIs_HOST`, `REDIS_PORT` and `REDIS_PASSWORD` in the `.env` file

## Running the Application
Run the application locally following the setup above using;
```bash
npm start
```

## External Dependencies
1. **Redis:** to run locally.
2. **MongoDB:** use for database.
3. **WebSocket:** for real time notification.


This README contains a walkthrough for the setup, configuration and deployment of the application. This can be adjusted as the application evolves.
