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
    <div className={`${isDisclaimer? 'transform translate-y-0 delay-500 opacity-1' : 'transform translate-y-[3rem] opacity-0'} fixed top-0 left-0 z-[200] flex justify-center w-full h-full transition duration-200 ease-in-out`}>
      <Disclaimer />
    </div>
    </>
  );
}

export default App;
