import axios from 'axios';

const KEY = 'AIzaSyDPGZUFbv1K48GG3ocdZWGMj7TVMjGiIjo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});