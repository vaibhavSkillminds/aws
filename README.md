# AWS Fullstack Demo Application

A simple fullstack application designed for learning AWS deployment.

## Project Structure
- `client/`: React TypeScript frontend (Vite)
- `server/`: Node.js Express backend

## Setup Instructions

### Backend Setup
```bash
cd server
npm install
npm run dev
```

The server will start on http://localhost:5000

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

The frontend will start on http://localhost:5173

## AWS Deployment Notes

This project is designed to be deployed on AWS. Recommended services:
- Frontend: AWS Amplify or S3 + CloudFront
- Backend: AWS Elastic Beanstalk or EC2

## API Details
The backend connects to the JSONPlaceholder API to fetch user data.

## Features
- React TypeScript frontend with Vite
- Node.js Express backend
- API connectivity demonstration
- Simple, clean UI 