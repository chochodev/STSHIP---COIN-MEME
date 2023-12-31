import Footer from 'components/footer';
import Navbar from 'components/navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'views/home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
