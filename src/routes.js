import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import TimelineWrapper from "./pages/timeline_wrapper";

export default function PageRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/timeline/*" exact element={<TimelineWrapper/>}/>
      </Routes>
    </BrowserRouter>
  );
}
