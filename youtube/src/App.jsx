
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Videoopen from './Components/Video/Videoopen'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/youtube/:id" element={<Videoopen />}></Route>
      </Routes>
    </>
  );
}

export default App
