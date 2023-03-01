import './App.css'

import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Errorpage from './pages/Errorpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='*' element={<Errorpage/>} />
      </Routes>
    </div>
  )
}

export default App
