import React from "react";
import {connect} from "react-redux";
import {savePost, editPost} from '../../actions/post-details-action'
import {PostListDetailsPage} from './post-details.component';

export default connect(null,{savePost,editPost})(PostListDetailsPage);