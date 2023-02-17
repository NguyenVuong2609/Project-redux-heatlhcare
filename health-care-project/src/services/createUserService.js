import axios from '../utils/baseAxios';
const baseUrl = "user";
const getUser = async ()=> {
    return await axios.get(`${baseUrl}`);
};
const postUser = async (data)=> {
    return await axios.post(`${baseUrl}`,data);
};
const deleteUser = async (id)=> {
    return await axios.delete(`${baseUrl}/${id}`);
};
const updateUser = async (id,User)=> {
    return await axios.put(`${baseUrl}/${id}`, User);
};
export {getUser, postUser, deleteUser, updateUser};