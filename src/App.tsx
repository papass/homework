import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import { Task1 } from './pages/p-work3/task1';
import { Task2 } from './pages/p-work3/task2';
import { Task3 } from './pages/p-work3/task3';
import { Task4 } from './pages/p-work4/task4';
import { Task5 } from './pages/p-work4/task5';
import { Task6 } from './pages/p-work5/task6';
import { Task7 } from './pages/p-work5/task7';
import { Task8 } from './pages/p-work6/task8';
import { Task9 } from './pages/p-work7/task9';

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
        <Route path='/task6' element={<Task6 />}></Route>
        <Route path='/task7' element={<Task7 />}></Route>
        <Route path='/task8' element={<Task8 />}></Route>
        <Route path='/task9' element={<Task9 />}></Route>
      </Routes>
    </>
  );
}

export default App;
