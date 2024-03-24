import { BASE_URL } from "./base_url";
import { commonAPI } from "./commonAPI";

// login api call
export const loginAPI = async (userData) => {
  return await commonAPI("post", `${BASE_URL}/api/user/login`, userData);
};

// register api call
export const registerAPI = async (userData) => {
  return await commonAPI("post", `${BASE_URL}/api/user/register`, userData);
};

// verify api call
export const verifyAPI = async (id, token) => {
  return await commonAPI("get", `${BASE_URL}/api/user/${id}/verify/${token}`);
};

// get all post api
export const fetchAllPostsAPI = async () => {
  return await commonAPI("get", `${BASE_URL}/api/post`);
};

// get all user post api
export const fetchUserPostsAPI = async (header) => {
  return await commonAPI("get", `${BASE_URL}/api/post/user/`,"",header);
};

// create new post api
export const createNewPostAPI = async (postDetails,headers) => {
  return await commonAPI("post", `${BASE_URL}/api/post`, postDetails, headers);
};

// edit post api
export const editPostAPI = async (postId,postDetails,headers) => {
  return await commonAPI("patch", `${BASE_URL}/api/post/${postId}`, postDetails, headers);
};

// delete post api
export const deletePostAPI = async (postId,headers) => {
  return await commonAPI("delete", `${BASE_URL}/api/post/${postId}`, {}, headers);
};