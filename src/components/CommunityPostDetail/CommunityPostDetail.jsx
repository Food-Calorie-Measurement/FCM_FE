import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import { fetchPostById } from "../../getPosts";
import "./CommunityPostDetail.style.css";

export default function CommunityPostDetail() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const fetchedPost = await fetchPostById(id);
        setPost(fetchedPost);
        setIsLoading(false);
      } catch (error) {
        console.error("게시글을 불러오지 못했습니다.", error);
        setError(true);
        setIsLoading(false);
      }
    };
    loadPost();
  }, [id]);

  // Loading Effect
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Post 찾을 수 없을 경우
  if (error || !post) {
    return <NotFoundPage />;
  }

  const communityNavigate = () => {
    navigate("/community");
  };

  return (
    <div className="postDetailContainer">
      <Navbar />
      <div className="postDetailContentContainer">
        <p className="postDetailDate">
          {new Date(post.createAt).toLocaleDateString()}
        </p>
        <h1 className="postDetailTitle">{post.title}</h1>
        <div className="postDetailContent">{post.content}</div>
      </div>
      <button className="postDetailCommunityPass" onClick={communityNavigate}>
        목록으로
      </button>
    </div>
  );
}
