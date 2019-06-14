import { ADD_ARTICLE } from '../constants/index'

const initialState = {
    articles: ['abc']
};

const articleHandler = (state = initialState, action) => {
    switch(action.type){
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: [...state.articles, action.text]
            });
        default:
            return state;
    }
};

export default articleHandler;