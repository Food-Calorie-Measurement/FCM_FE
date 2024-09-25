import React, { useState } from "react";
import Navbar from "../../layout/Navbar/Navbar";
import "./CommunityWritePost.style.css";

export default function CommunityWritePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      author,
      password,
      content,
    };

    console.log(postData);
  };

  return (
    <div className="writePostContainer">
      <Navbar />
      <h1 className="writePostTitle">글쓰기</h1>
      <form className="writePostForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="author">작성자</label>
          <input
            type="text"
            id="author"
            placeholder="이름을 입력하세요."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">비밀번호 등록</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="formContentGroup">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="submitButtonContainer">
          <button type="submit" className="submitButton">
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
}
