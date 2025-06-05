# 👨‍💼 Employee Management System – Java Full Stack CRUD App

A simple full-stack web application to **Create, Read, Update, and Delete (CRUD)** employee records using **Spring Boot**, **React.js**, and **MySQL**.

## 🚀 Tech Stack

### Backend

* **Java 17+**
* **Spring Boot**
* **Spring Data JPA**
* **RESTful APIs**
* **MySQL** (Relational database)

### Frontend

* **React.js**
* **Axios** (for API calls)
* **Tailwind CSS / Bootstrap** (for styling, optional)

## 📦 Features

* ✅ Add new employee
* ✅ View list of all employees
* ✅ Update employee details
* ✅ Delete employee
* ✅ Simple and responsive UI
* ✅ REST API integration

## 🛠️ Setup Instructions

### Backend (Spring Boot)

1. Clone the project:

   ```bash
   git clone https://github.com/your-username/employee-crud-app.git
   cd employee-crud-app/backend
   ```

2. Set up your database (MySQL):

   ```sql
   CREATE DATABASE employee_db;
   ```

3. Update the `application.properties` with your DB credentials:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

4. Run the project:

   ```bash
   mvn spring-boot:run
   ```

### Frontend (React.js)

1. Navigate to frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend:

   ```bash
   npm run dev
   ```


## 📁 Folder Structure

```
/backend
  └── src/main/java/com/example/employee
      ├── model
      ├── repository
      ├── controller
      └── service

/frontend
  └── src/
      ├── components/
      ├── pages/
      └── App.jsx
```


