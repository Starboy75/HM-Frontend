import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelListing from './pages/Hotels';
import Header from './pages/Header';
import Footer from './pages/Footer';
import States from './pages/Divisons';
import Page from './admin/page';

function App() {

  const [userInfo, setUserInfo] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [booking, setBooking] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token && token !== "YOUR_AUTH_TOKEN") {
      axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      }, error => {
        return Promise.reject(error);
      });
      setIsLogged(true);
    } 
    
    const storedUserInfo = localStorage.getItem('user');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Page />} />
        <Route 
          path="*" 
          element={
            <>
              <Header setIsLogged={setIsLogged} setUserInfo={setUserInfo} userInfo={userInfo} isLogged={isLogged} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/state/hotels" element={<HotelListing booking={booking} setBooking={setBooking} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} destination={destination}/>} />
                <Route path="/divisons" element={<States setDestination={setDestination}/>} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
