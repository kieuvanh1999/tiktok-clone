import axios from 'axios';

const vidS = axios.create({
    baseURL: process.env.VIDEOS_APP,
});

export const get = async (path, option = {}) => {
    const response = await vidS.get(path, option);
    return response.data;
};

export default vidS;
