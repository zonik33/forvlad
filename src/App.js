import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import PopupE from "./components/PopupReg/PopupE";


const auth_key = localStorage.getItem('auth_key');
const isAuthenticated = !!auth_key;

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupE, setShowPopupE] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  function openPopup() {
    document.getElementById("popup-ticket1").style.display = "block";
    document.body.classList.add("no-scroll");
  }

  // Функция для получения данных профиля
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
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('auth_key');
          localStorage.removeItem('profile');
          window.location.href = '/'; // Перенаправляем на главную
        }
      }
    }
  }

  useEffect(() => {
    fetchData(); // Получение данных профиля
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('ref');

    if (referralCode) {
      // setShowPopup(true);
    }
  }, []);

  // Открытие попапа при монтировании компонента.
  useEffect(() => {
    setShowPopupE(true);
  }, []);

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/profile/*" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
            <Route path="/gifts/*" element={isAuthenticated ? <Gifts /> : <Navigate to="/" />} />
            <Route path="/tickets/*" element={isAuthenticated ? <Tickets /> : <Navigate to="/" />} />
            <Route path="/winners-videos/*" element={<WinnersVideos />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <PopupStart />
        <PopupBanner />
        {showPopup && <Popup isOpen={showPopup} closeModal={() => setShowPopup(false)} />}
        {showPopupE && <PopupE isOpen={showPopupE} closeModal={() => setShowPopupE(false)} />}
      </div>
  );
}

export default App;