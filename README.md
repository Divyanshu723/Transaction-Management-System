## Table of Contents
1. [Project's Title](#transaction-management-system)
2. [Project Description](#project-description)
3. [Table of Contents](#table-of-contents)
4. [How to Install and Run the Project](#how-to-install-and-run-the-project)
5. [How to Use the Project](#how-to-use-the-project)
6. [Credits](#credits)
7. [References](#references)


# Transaction Management System

This project is a comprehensive transaction management system designed to help users track and analyze their sales data efficiently. It provides detailed statistics, a searchable transaction table, and interactive charts for better insights.

## Project Description

The Transaction Dashboard is built to offer users a seamless experience in managing and analyzing transaction data. It includes features such as searching transactions, viewing monthly statistics, and visualizing price ranges through charts.

Key features include:
- **Transaction Management**: View and search transactions with pagination.
- **Statistics**: Detailed monthly statistics for sales, sold items, and unsold items.
- **Visualization**: Interactive bar charts to visualize price ranges and transaction distributions.

Technologies used:
- **Frontend**: React, Tailwind CSS, ApexCharts
- **Backend**: Node.js, Express, MongoDB
- **UI Components**: NextUI

Challenges faced:
- Implementing efficient search and pagination.
- Creating responsive and interactive charts.
- Ensuring smooth integration between frontend and backend.

Future improvements:
- Adding user authentication.
- Enhancing the filtering options.
- Implementing real-time data updates.


## How to Install and Run the Project

### Prerequisites
- Node.js
- MongoDB

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/transaction-dashboard.git
    cd transaction-dashboard
    ```
### Backend Setup

2.  Firstly, hit the api (given below) from Postman 
    with post  method to initialize the DB:
    ```bash
    http://localhost:4000/api//init-db
    ```


3. Navigate to the backend directory:
    ```bash
    cd server
    ```

4. Install the dependencies:
    ```bash
    npm install
    ```

5. Set up backend environment variables. Create a `.env` file in the root directory and add the following:
    ```plaintext
   MONGO_URI="mongodb+srv://your_mongodb_connection_string"
    PORT=4000
    ```

6. Start the backend server:
    ```bash
    node index.js
    ```

### Frontend Setup

7. Navigate to the frontend directory:
    ```bash
    cd ..
    ```

8. Install frontend dependencies:
    ```bash
    npm install
    ```
9. Set up frontend environment variables. Create a `.env` file in the root directory and add the following:
    ```bash
    REACT_APP_BASE_URL = http://localhost:4000/api
    ```

10. Start the frontend development server:
    ```bash
    npm run start
    ```

11. Start the backend server and frontend development server concurrently:
    ```bash
    npm run dev
    ```

## How to Use the Project

1. **Search Transactions**: Type keywords in the search bar and press Enter to filter transactions based on the search term.

2. **Select Month**: Use the dropdown menu to select a month and view statistics and transactions for that period.

3. **View Statistics**: Scroll down to view detailed statistics for the selected month.

4. **Visualize Data**: Check out the interactive bar charts for a visual representation of the price ranges and transaction data.

## Credits

### Team Members
- **Divyanshu** - [GitHub](https://github.com/Divyanshu723)

## References
- [NextUI Documentation](https://nextui.org/docs/guide/getting-started)
- [ApexCharts Documentation](https://apexcharts.com/docs/react-charts/)



