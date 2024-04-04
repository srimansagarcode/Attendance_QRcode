import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Student from './pages/Student'
import Faculty  from './pages/Faculty'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/student' element={<Student />}>Student</Route>
          <Route path='/faculty' element={<Faculty />}>Faculty</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
