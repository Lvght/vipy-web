import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./styles.css";
import Timeline from "../timeline";
import { Route, Routes } from "react-router-dom";
import Detail from "../detail";
import Profile from "../profile";
import api from "../../services/api";

export default function TimelineWrapper() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function loadPosts() {
    setLoading(true);
    api.get("/posts/").then((response) => {
      setPosts(response.data.reverse());
      setLoading(false);
    });
  }

  useEffect(() => {
    loadPosts();
  }, []);

  if (loading) return null;
  return (
    <>
      <Navbar />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        posts={posts}
        setPosts={setPosts}
      />
      <div className="timeline">
        <Routes>
          <Route path="/" element={<Timeline posts={posts} />} />
          <Route path="/detail/:postId" element={<Detail />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}
