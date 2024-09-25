import axios from "axios";

export const fetchPosts = async () => {
  try {
    //get 뒤에 backend API 받아오기
    const response = await axios.get("");
    return response.data;
  } catch (error) {
    console.error("게시글 불러오기 실패", error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    //get 뒤에 backend API 받아오기
    const response = await axios.get(``);
    return response.data;
  } catch (error) {
    console.error(`ID: ${id}인 게시글 불러오기 실패`, error);
    throw error;
  }
};
