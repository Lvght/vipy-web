import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Timeline from "./pages/timeline";

export default function PageRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timeline" exact element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}
