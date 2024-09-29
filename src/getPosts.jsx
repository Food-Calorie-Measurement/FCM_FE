import axios from "axios";

export const fetchPosts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/posts", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("게시글을 불러오는 중 오류가 발생했습니다.", error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/posts/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("게시글을 불러오는 중 오류가 발생했습니다.", error);
    throw error;
  }
};
