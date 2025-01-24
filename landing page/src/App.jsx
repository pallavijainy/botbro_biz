import React, { useEffect, useState } from 'react'
import Home from './component/Home'
import "./App.css";
import ContactFormPopup from './component/ContactFormPopup';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); 

    return () => clearTimeout(timer);
  }, []);


  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <Home/>
      <ContactFormPopup show={showPopup} closePopup={closePopup}/>
    </div>
  )
}

export default App
