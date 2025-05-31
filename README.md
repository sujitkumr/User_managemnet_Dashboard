# 🧑‍💼 User Management Dashboard

A simple **Admin Dashboard** built with **Next.js** and **TypeScript**. This app allows you to view users, search/filter them, and add new users via a multi-step form with validation.

---

## 🎯 Objective

- Fetch and display users from an API
- Search and filter users
- Add new users through a 3-step form
- Implement form validation, conditional rendering, and state management

---

## 🔑 Features

### 1. 📊 Dashboard (`/dashboard`)
- Fetch users from `https://jsonplaceholder.typicode.com/users`
- Display: **Name**, **Email**, **Phone**, and **City**
- Search/filter users by name or city
- Show loading and error states
![Screenshot 2025-06-01 021744](https://github.com/user-attachments/assets/a6787bb5-0bb4-4c2f-8c7e-479bc9453d03)

### 2. ➕ Add User (`/dashboard/add`)
- 3-step form:
  1. Basic Info (Name, Email)
  2. Address (Street, City, ZIP Code)
  3. Review & Confirm
- Use `useState` or `Context` to manage form steps
- Validate inputs (required fields, valid email)
- Log final data to console on submission
- "Back to Dashboard" button for easy navigation
![Screenshot 2025-06-01 021942](https://github.com/user-attachments/assets/68f75a1f-1d7d-454f-ad24-af44c1c12c14)

![Screenshot 2025-06-01 022003](https://github.com/user-attachments/assets/b882f607-2beb-4174-a450-4700021951e6)

![Screenshot 2025-06-01 022030](https://github.com/user-attachments/assets/983cae04-4383-459b-b9a1-18ab1da2b8ef)

## ✨ Optional Extras 
- Form animations with `framer-motion`
- Save form progress using `localStorage`
- Light/Dark mode using **Tailwind CSS**
- Toast notification or modal on successful submission

---

## 🛠 Tech Stack

- **Next.js + TypeScript**
- **Tailwind CSS** or CSS Modules
- **Axios** or Fetch API
- Optional: `framer-motion`, `react-hook-form`, `zod`

---

## ▶️ Getting Started

```bash
# Clone the repository
git clone https://github.com/sujitkumr/User_managemnet_Dashboard.git

# Navigate into the folder
cd user-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
