import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "../../components/post";
import api from "../../services/api";

export default function Detail() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get(`/posts/${postId}/`).then((response) => {
      setPost(response.data);
      setLoading(false);
    });
  }, [postId]);

  if (loading) return null;
  return (
    <div>
      <Post post={post} />
    </div>
  );
}
