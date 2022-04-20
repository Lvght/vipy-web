import React from "react";
import Navbar from "../../components/navbar";
import Post from "../../components/post";
import Sidebar from "../../components/sidebar";
import "./styles.css";

export default function Timeline() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="timeline">
        <Post />
      </div>
    </>
  );
}
