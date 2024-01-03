import Disclaimer from 'components/disclaimer';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'views/home';

function App() {
  const [isDisclaimer, setIsDisclaimer] = useState(false  );

  return (
    <>
    <div className={`${isDisclaimer? 'overflow-hidden' : 'overflow-auto'}`}>
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
