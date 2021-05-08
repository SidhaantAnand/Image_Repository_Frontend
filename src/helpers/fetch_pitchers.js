import axios from 'axios';

export const fetchPichers = (utterance) => {
    return axios.get(`http://localhost:8080/fetch?utterance=${utterance}`)
}