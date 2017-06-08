const postInitialStata = {
    posts:[],
}

const PostReducer = (state = postInitialStata,action) =>{
    switch (action.type) {
        case "GET_POST_FULFILLED":
            state = {
                ...state,
                posts: action.payload.data,
            }
            break;
        case "REMOVE_POST":
            
            state = {
                ...state,
                posts: state.posts.filter( (x) => x.id !== action.payload.id)
            };
        break;
        
        default:
            break;
    }
    return state
}

export default PostReducer;