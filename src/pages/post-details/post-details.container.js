import {connect} from "react-redux";
import {savePost, editPost} from '../../actions/post-details-action'
import {PostListDetailsPage} from './post-details.component';

const actions = {savePost, editPost};
export default connect(null,actions)(PostListDetailsPage);