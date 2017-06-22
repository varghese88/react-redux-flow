 export const detailsPost = () => {
    return (dispatch,getState) =>{
        dispatch({
            type: 'DETAIL_POST',
            payload:getState().postPageData
        })
    }
};
