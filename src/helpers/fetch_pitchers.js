import axios from 'axios';

export const fetchPichers = (utterance) => {
    return axios.get(`https://fast-forest-10902.herokuapp.com/fetch?utterance=${utterance}`)
}