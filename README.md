# Task Management Application
Task Management is a full-stack application that helps you organize your responsibilities more easily, providing a user-friendly interface. The application was built using the MERN stack (MongoDB, Express.js, React.js, Node.js), as well as TailwindCSS and Redux Toolkit. 

# How To Run
- Git clone repository
- Run these commands in terminal/shell:
  -  <b>npm install</b> in backend folder
  -  <b>npm install</b> in frontend folder
  -  <b>npm run dev</b> at the root of the project 

# Project Architecture

### Root
```   
└───backend
└───frontend
└───node_modules
│   package-lock.json 
│   package.json 
│   README.md
```

### Backend Folder
```
│   server.js    
└───config
    │   db.js
└───controllers
    │   taskController.js
    │   userController.js
└───middleware
    │   authMiddleware.js
    │   errorMiddleware.js
└───models
    │   taskModel.js
    │   userModel.js
└───routes
    │   taskRoutes.js
    │   userRoutes.js
```

### Frontend Folder
```   
└───public
└───src
└───models
│   .gitignore 
│   package-lock.json 
│   package.json
│   postcss.config.js
│   tailwind.config.js
└───node_modules
```

# Application Review

### Login Page
![Login](https://user-images.githubusercontent.com/84568841/156769319-5efa36e4-3736-4de7-98f9-5e55be844884.png)

### Registration Page
![Registration](https://user-images.githubusercontent.com/84568841/156769445-a878e296-9c58-45f3-b3ca-75519aca25f4.png)

### Create Task
![Create Task](https://user-images.githubusercontent.com/84568841/156769560-c0b82db8-7914-4967-88f2-fd9ee3d86d5e.png)

### My Tasks
![My Tasks](https://user-images.githubusercontent.com/84568841/156769582-bfc378f7-9b7a-4798-b43e-e60ccfe25b6a.png)

### Single Task
![Single Task Page](https://user-images.githubusercontent.com/84568841/156769617-a8ca8d3a-81a3-4fda-ac84-ba8f84aa5f44.png)



