#!/bin/bash

echo "📦 Installing dependencies for backend..."
cd server # שנה את זה לשם של תיקיית ה-Node שלך
npm install

echo "🚀 Starting backend..."
npm start &

cd ..

echo "📦 Installing dependencies for frontend..."
cd client # שנה את זה לשם של תיקיית ה-React שלך
npm install

echo "🌍 Starting frontend..."
npm start
