
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Details from './pages/Details';

function App() {
  return (
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
