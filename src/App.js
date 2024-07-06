import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Profile from "./components/lk-profile/Profile";
import Nav from "./Nav/Nav";
import Gifts from "./components/lk-profile/Gifts";
import Tickets from "./components/lk-profile/Tickets";
import NotFoundPage from "./components/Error/NotFoundPage";
import axios from "axios";
import Popup from "./components/PopupReg/Popup";
import Videos from "./components/lk-profile/Videos";
import WinnersVideos from "./components/Winners-videos/WinnersVideos";
import PopupStart from "./components/PopupReg/PopupStart";
import PopupBanner from "./components/PopupTicket/PopupBanner";
const auth_key = localStorage.getItem('auth_key');
const isAuthenticated = !!auth_key;


async function fetchData() {
  if (isAuthenticated) {
    try {
      const response = await axios.get('https://nloto-promo.ru/backend/api/profile', {
        headers: {
          'X-Auth-Token': auth_key
        }
      });

      if (response.data.result) {
        localStorage.setItem('profile', JSON.stringify(response.data.data));
      }
    } catch (error) {
      // Handle error, if needed
    }
  }
}
fetchData();


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('ref');

    if (referralCode) {
      setShowPopup(true);
    }
  }, []);
  useEffect(() => {
    // Обработчик события, вызываемый после загрузки всего контента
    const handleContentLoaded = () => {
      setIsContentLoaded(true);
    };
    document.addEventListener('DOMContentLoaded', handleContentLoaded);
    openPopup2()
    // openPopup3()
    return () => {
      document.removeEventListener('DOMContentLoaded', handleContentLoaded);
    };
  }, []);

  useEffect(() => {
    if (isContentLoaded) {
    }
  }, [isContentLoaded]);
  function openPopup2() {
    document.getElementById("popup-start").style.display = "block";
    document.body.classList.add("no-scroll");
    document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
  }
  function openPopup3() {
    document.getElementById("popup-banner").style.display = "block";
    document.getElementById("popup-banner").classList.add("popup-animation");
    document.body.classList.add("no-scroll");
    document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
  }



  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route
                path="/profile/*"
                element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
            />
            <Route
                path="/gifts/*"
                element={isAuthenticated ? <Gifts /> : <Navigate to="/" />}
            />
            <Route
                path="/tickets/*"
                element={isAuthenticated ? <Tickets/> : <Navigate to="/" />}
            />
            <Route path="/videos/*" element={isAuthenticated ? <Videos/> : <Navigate to="/" />}
            />
            <Route path="/winners-videos/*" element={<WinnersVideos />}
            />

            <Route path="/404/*" element={<NotFoundPage />} />

          </Routes>
        </BrowserRouter>
        <PopupStart/>
        <PopupBanner/>
        {showPopup && <Popup isOpen={showPopup} closeModal={() => setShowPopup(false)} />}
      </div>

  );
}

export default App;