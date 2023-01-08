import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Oauth from "./components/Oauth";

function App()
{
    const [activeNavEl, setActiveNavEl] = useState("");
    const [token, setToken] = useState("");

  return (
      <>
          <Oauth setToken={setToken} />

          <Router>
            <Navbar activeNavEl={activeNavEl} />

              <div style={{display: "flex", justifyContent: "center", minHeight: "100vh", position: "relative", zIndex: 2}}>
                <Routes>
                  <Route path="/" element={<MainPage setActiveNavEl={setActiveNavEl} token={token} />} />
                </Routes>
              </div>

            <Footer />
          </Router>
      </>
  );
}

export default App;
