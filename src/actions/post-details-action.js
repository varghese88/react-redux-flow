 export const savePost = () => {
    return (dispatch,getState) =>{
        dispatch({
            type: 'SAVE_POST',
            payload:getState().postPageData
        })
    }
};

export const editPost = () => ({
     type: 'EDIT_POST'
});
