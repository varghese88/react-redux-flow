import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {detailsPost} from '../../actions/post-details-action'
import {PostListDetailsPage} from './post-details.component';

const mapDispatchToProps = (dispatch)=>(
    bindActionCreators({detailsPost},dispatch)
);

export default connect(null,mapDispatchToProps)(PostListDetailsPage);