import './App.css';

/////////////////////////////////
import Header from './components/board/Header';
import Home from './components/board/Home';
import BoardList from './components/board/BoardList';
import BoardWrite from './components/board/BoardWrite';


/////////////////////////////////
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';



/////////////////////////////////
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardWrite" element={<BoardWrite />} />
      </Routes>
    </>
  );
}

export default App;
