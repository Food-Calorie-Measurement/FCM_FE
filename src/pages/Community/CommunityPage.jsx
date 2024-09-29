import React, { useState, useEffect } from "react";
import Navbar from "../../layout/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./CommunityPage.style.css";
import { fetchPosts } from "../../getPosts";

export default function CommunityPage() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        console.log(posts);
        if (Array.isArray(fetchedPosts)) {
          const sortedPosts = fetchedPosts.sort(
            (a, b) => new Date(b.createAt) - new Date(a.createAt)
          );
          setPosts(sortedPosts);
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error("게시글을 불러오지 못했습니다.", error);
        setPosts([]);
      }
    };
    loadPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Array.isArray(posts)
    ? posts.slice(indexOfFirstPost, indexOfLastPost)
    : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));

  const writePostNavigate = () => {
    navigate("/writepost?boardGrade=community");
  };

  return (
    <div className="communityContainer">
      <Navbar />
      <h1 className="communityPageTitle">커뮤니티</h1>
      <div className="communityPageHR" />

      <ul className="postList">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <li key={post.id} className="postItem">
              <Link className="postLink" to={`/community/${post.id}`}>
                <span className="postTitle">{post.title}</span>
                <div className="postInfoContainer">
                  <span className="postAuthor">{post.writer}</span>
                  <span className="postDate">
                    {new Date(post.createAt).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="noPosts">게시글이 없습니다.</p>
        )}
      </ul>

      <div className="pagination">
        <button
          className="movementButton"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        <button
          className="movementButton"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="movementButton"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
        <button
          className="movementButton"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>

      <div className="writeButtonContainer">
        <button className="writeButton" onClick={writePostNavigate}>
          글쓰기
        </button>{" "}
      </div>
    </div>
  );
}
