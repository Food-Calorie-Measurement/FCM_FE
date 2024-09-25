import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import "./CommunityPostDetail.style.css";
import { fetchPostById } from "../../getPosts";

const CommunityPostDetailPostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const fetchedPost = await fetchPostById(id); // ID로 게시글 불러오기
        setPost(fetchedPost);
      } catch (error) {
        console.error("게시글을 불러오지 못했습니다.", error);
        setError(true);
      }
    };
    loadPost();
  }, [id]);

  if (error) {
    return <NotFoundPage />;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="postDetailContainer">
      <Navbar />
      <div className="postDetailContentContainer">
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <p>{post.author}</p>
      </div>
    </div>
  );
};

export default CommunityPostDetailPostDetail;
