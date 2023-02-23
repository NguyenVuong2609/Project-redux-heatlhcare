import axios from '../utils/baseAxios';
const baseUrl = "posts";
const getPost = async ()=> {
    return await axios.get(`${baseUrl}`);
};
const postNewPost = async (data)=> {
    return await axios.post(`${baseUrl}`,data);
};
const deletePost = async (id)=> {
    return await axios.delete(`${baseUrl}/${id}`);
};
const updatePost = async (id,post)=> {
    return await axios.put(`${baseUrl}/${id}`, post);
};
const patchPost = async(id,info)=> {
    return await axios.patch(`${baseUrl}/${id}`, info)
};
export {getPost, postNewPost, deletePost, updatePost, patchPost};