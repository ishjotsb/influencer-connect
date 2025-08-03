# 📱 Influencer Marketplace

An MVP web application for creators (influencers) and brands to connect, collaborate, and run sponsored campaigns.

Built using the **MERN Stack + Next.js**.

---

## 🚀 Features

### 🧾 Onboarding
- Role-based registration: **Creators** via mobile OTP, **Brands** via email + mobile OTP
- Secure OTP verification using **Twilio** and **SendGrid**

### 🏠 Home + Navigation
- Instagram-style bottom tab navigation: `Home`, `Influencers`, `Campaigns`
- Dynamic views for creators and brands

### 🎯 Campaigns (for Brands)
- Create campaigns with: name, description, budget, timeline, niche, requirements
- View and manage campaigns by status (Draft, Active, Completed)

### 👤 Influencer Profile
- Public view: niche, social links, location, engagement rate, sponsored videos
- Edit view: email, social links, portfolio upload (via Cloudinary)

## How to run locally
- Clone the repo
- cd into both directories
- run npm install
- add your mongodb connection string in the backend .env file
- add your api url in the frontend .env file
- run the backend using npm start
- run the frontend using npm run dev

## 📁 Folder Structure (Simplified)

