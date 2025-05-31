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

### 2. ➕ Add User (`/dashboard/add`)
- 3-step form:
  1. Basic Info (Name, Email)
  2. Address (Street, City, ZIP Code)
  3. Review & Confirm
- Use `useState` or `Context` to manage form steps
- Validate inputs (required fields, valid email)
- Log final data to console on submission
- "Back to Dashboard" button for easy navigation

---

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
