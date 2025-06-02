# Invoice Management Application

## Overview
A modern invoice management system built with React, TypeScript, and TailwindCSS. This application provides a user-friendly interface for managing invoices, vendor details, and expense tracking.

## Features
- **User Authentication**
  - Secure login system
  - Protected routes for authenticated users

- **Invoice Management**
  - Create and manage invoices
  - PDF file upload for invoice documents
  - Auto-population of form fields
  - Real-time form validation

- **Vendor Management**
  - Vendor details management
  - Expandable vendor information view
  - Quick vendor selection

- **Expense Tracking**
  - Multiple expense entries
  - Support for both percentage and dollar amounts
  - Department and location tracking
  - Expense description and categorization

- **Data Persistence**
  - Local storage integration
  - Draft saving functionality
  - Form data recovery

## Technology Stack
- React with TypeScript
- Formik for form management
- Yup for validation
- TailwindCSS for styling
- React-toastify for notifications

## Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd react-assignment
```
npm install
# or
yarn install

npm run dev
# or
yarn dev


src/
  ├── components/
  │   ├── home/
  │   │   ├── form/           # Form components
  │   │   ├── PdfUploader.tsx # PDF upload functionality
  │   ├── login/              # Authentication components
  ├── pages/
  │   ├── home/              # Main application pages
  │   ├── login/             # Authentication pages
  ├── redux/                 # State management
  ├── routes/                # Application routing
  ├── utility/               # Utility functions