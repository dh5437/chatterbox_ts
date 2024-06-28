import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Room from "./components/Room";
import Practice from "./components/Practice";
import React from "react";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/:roomname" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
