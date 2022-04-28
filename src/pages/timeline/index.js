import { useEffect, useState } from "react";
import Post from "../../components/post";
import api from "../../services/api";
export default function Timeline() {
  const [posts, setPosts] = useState([]);

  function loadPosts() {
    api.get("/posts/").then((response) => {
      setPosts(response.data);
    });
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
