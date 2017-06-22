
const PostDetailsReducer = (state = {},action) =>{
    switch (action.type) {
    
        case "DETAIL_POST":
            action.payload.posts.pop();
        break;
        
        default:
            break;
    }
    return state
}

export default PostDetailsReducer;