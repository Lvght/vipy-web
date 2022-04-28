import { useEffect, useState } from "react";
import Post from "../../components/post";
import api from "../../services/api";
export default function Timeline({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
