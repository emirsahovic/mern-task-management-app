import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Register from './pages/Register';
import Login from './pages/Login';
import TaskForm from './pages/TaskForm';
import MyTasks from './pages/MyTasks';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tasks' element={<TaskForm />} />
          <Route path='/my-tasks' element={<MyTasks />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
