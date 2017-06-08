import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getPosts , removePost} from '../../actions/post-action'
import {PostListPage} from './post-list.component';

const mapStateToProps = (state) =>(
    { posts:state.postPageData.posts }
);
const mapDispatchToProps = (dispatch)=>(
    bindActionCreators({getPosts,removePost},dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps)(PostListPage);