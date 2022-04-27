import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./styles.css";
import Timeline from "../timeline";
import { Route, Routes } from "react-router-dom";
import Detail from "../detail";
import Profile from "../profile";

export default function TimelineWrapper() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="timeline">
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}
