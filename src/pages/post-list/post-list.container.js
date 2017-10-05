import React from "react";
import {connect} from "react-redux";
import {getPosts , removePost} from '../../actions/post-action'
import {PostListPage} from './post-list.component';

const mapStateToProps = (state) =>(
    { posts:state.postPageData.posts }
);

export default connect(mapStateToProps,{getPosts,removePost})(PostListPage);