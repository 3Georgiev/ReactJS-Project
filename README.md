# Game Shop Project

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)

## Description

This project is a small game shop web application that allows users to register, login, create, edit, search, delete offers, and comment on them. For the server side, we are using SoftUni's practice server. This project is developed as part of the final course at SoftUni and is implemented in React.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool that focuses on frontend development.
- React Router DOM: Declarative routing for React.js.
- npm: Node Package Manager for managing project dependencies.
- SoftUni's Practice Server: Server provided by SoftUni for practicing purposes.

## Prerequisites

Make sure you have the following installed before running the project:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/3Georgiev/ReactJS-Project

```

2. Navigate to the server directory:

```bash
 cd server
```

3. Start the server:

```bash
node server.js
```

4. Open a new terminal window and navigate to the client directory:

```bash
cd client
```

5. Install client dependencies:

```bash
npm install
```

6. Start the client:

```bash
npm run dev
```

## Features

- **Authentication:**

  - Users can register and log in to the application.

- **User Profile:**

  - Each user has a profile page where they can view their own offers and user data.

- **Offer Management:**

  - Users can create, delete, and update their own offers.
  - Each offer has a details page for in-depth information.

- **All Offers Page:**

  - A dedicated page showing all available offers.

- **Commenting System:**

  - All users can leave comments on each other's offers and delete their own.

- **Free Games Page:**

  - Displays a list of free games obtained from an external API.

- **Search Feature:**
  - Users can search for offers based on the title of the offers.

## Usage

1. Open your web browser and go to http://localhost:3000 to access the game shop application.
2. Register or log in to your account.
3. Explore the features such as creating, editing, searching and deleting offers, as well as commenting on them.

4. Default users:

- **User 1:**

  - Email: peter@abv.bg
  - Password: 123456

- **User 2:**
  - Email: george@abv.bg
  - Password: 123456
