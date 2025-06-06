import './App.css';
import Navbar from './Components/Navbat';
import CardScroll from './Components/CardScroll';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayStoreAppCard from './Components/Appdetail';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardScroll />} />
          <Route path="/details" element={<PlayStoreAppCard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
