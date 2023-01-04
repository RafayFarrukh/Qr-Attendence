import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./components/content";
import Home from "./components/Home";
import "./css/style.css";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import Login from "./Authentication/Login";
import Landpage from "./components/Landpage";
import { useNavigate } from "react-router-dom";
import TakeAttendence from "./components/TakeAttendence";

function App() {
  const [qrText, setQrText] = useState("");

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = localStorage.getItem("User");
  React.useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {user ? (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        ) : (
          <></>
        )}

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {user ? (
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          ) : (
            <></>
          )}

          <Routes>
            <Route exact path="/" element={<Landpage />} />
            <Route exact path="/content" element={<Content />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route
              exact
              path="/TakeAttendence"
              element={<TakeAttendence setQrText={setQrText} qrText={qrText} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
