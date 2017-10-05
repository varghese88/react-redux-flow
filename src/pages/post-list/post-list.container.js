import {connect} from "react-redux";
import {getPosts , removePost} from '../../actions/post-action'
import {PostListPage} from './post-list.component';

const mapStateToProps = (state) =>(
    { posts:state.postPageData.posts }
);
const actions = {getPosts , removePost};
export default connect(mapStateToProps,actions)(PostListPage);