import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import { Task1 } from './pages/task1';
import { Task2 } from './pages/task2';
import { Task3 } from './pages/task3';
import { Task4 } from './pages/task4';
import { Task5 } from './pages/task5';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/task1' element={<Task1 />}></Route>
        <Route path='/task2' element={<Task2 />}></Route>
        <Route path='/task3' element={<Task3 />}></Route>
        <Route path='/task4' element={<Task4 />}></Route>
        <Route path='/task5' element={<Task5 />}></Route>
      </Routes>
    </>
  );
}

export default App;
