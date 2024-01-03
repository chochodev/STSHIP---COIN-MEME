import Disclaimer from 'components/disclaimer';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'views/home';

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
    <div>
      <Disclaimer />
    </div>
    </>
  );
}

export default App;
