import { 
    SET_FAVORITE, 
    DELETE_FAVORITE,
    LOGIN_REQUEST, 
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
    GET_VIDEOS_SOURCE,
    GET_VIDEOS_SEARCH
} from '../actions/actionTypes';


const reducer = (state, action) => {
    switch(action.type) {
        case SET_FAVORITE:
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload,
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                user: action.payload,
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload,
            }
        case GET_VIDEOS_SOURCE:
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload))
                || state.original.find(item => item.id === Number(action.payload))
                || []
            }
        case GET_VIDEOS_SEARCH: 
            if(action.payload === "") {
                return {
                    ...state,
                    searchVideos: []
                };
            }

            const lists = [...state.trends, ...state.originals];
            return {
                ...state,
                searchVideos: lists.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) || []
            }
        
        default:
            return state;
    }
}

export default reducer;