import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getPost } from '../../redux/actions/posts';
import { connect } from 'react-redux';
import PostItem from '../Posts/PostItem/';
import { routes } from '../../routes';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post, selectedPostId }) => {
    const { comments } = post || {};
    useEffect(() => {
        getPost(selectedPostId);
    }, [getPost, selectedPostId]);

    const renderComments =
        comments &&
        comments.length > 0 &&
        comments.map((comment) => (
            <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
            />
        ));
    return (
        post && (
            <Fragment>
                <Link className="btn" to={routes.POSTS}>
                    Back to posts
                </Link>

                <Fragment>
                    <PostItem post={post} />
                    <CommentForm postId={post._id} />
                    {renderComments}
                </Fragment>
            </Fragment>
        )
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    selectedPostId: PropTypes.string.isRequired,
    post: PropTypes.object,
};

const mapStateToProps = (state) => ({
    post: state.posts.post,
    selectedPostId: state.posts.selectedPostId,
});

export default connect(mapStateToProps, { getPost })(Post);
