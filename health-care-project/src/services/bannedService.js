import axios from '../utils/baseAxios';
const baseUrl = "banned";
const getUser = async ()=> {
    return await axios.get(`${baseUrl}`);
};
const postBanUser = async (data)=> {
    return await axios.post(`${baseUrl}`, data);
};
const deleteUser = async (id)=> {
    return await axios.delete(`${baseUrl}/${id}`);
};
export {getUser, deleteUser , postBanUser};