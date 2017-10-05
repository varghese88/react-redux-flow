
const PostDetailsReducer = (state = {},action) =>{
    switch (action.type) {
    
        case "EDIT_POST":
            console.log('----edit post ----');
        break;
        case "SAVE_POST":
           console.log('----save post ----');
        break;
        
        default:
            break;
    }
    return state
}

export default PostDetailsReducer;