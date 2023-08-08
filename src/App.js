import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.scss';
import HomePage from './pages/HomePage';
import TradingReward from './pages/Trading-reward/TradingReward';
import Pools from './pages/Pools/Pools';
import PoolsHistory from './pages/Pools/History';
import { Lottery } from './pages/Lottery/Lottery';
import IFO from './pages/IFO/IFO'

function App() {
  return (
    <div>
      <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/trading-reward" element={<TradingReward />} />
          <Route path="/pools" element={<Pools />} />
          <Route path="/pools/history" element={<PoolsHistory />} />
          <Route path="/lottery" element={<Lottery/>}/>
          <Route path='/ifo' element={<IFO/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;