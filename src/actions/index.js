import { ADD_ARTICLE } from '../constants/index';

export const addArticles = (text) => ({
    type: ADD_ARTICLE,
    text
})