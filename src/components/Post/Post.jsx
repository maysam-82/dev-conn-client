import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getPost } from '../../redux/actions/posts';
import { connect } from 'react-redux';
import PostItem from '../Posts/PostItem/PostItem';
import { routes } from '../../routes';
import { Link } from 'react-router-dom';

const Post = ({ getPost, post, selectedPostId }) => {
    useEffect(() => {
        getPost(selectedPostId);
    }, [getPost, selectedPostId]);

    return (
        post && (
            <Fragment>
                <Link className="btn" to={routes.POSTS}>
                    Back to posts
                </Link>
                <PostItem post={post} />;
            </Fragment>
        )
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    selectedPostId: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.posts.post,
    selectedPostId: state.posts.selectedPostId,
});

export default connect(mapStateToProps, { getPost })(Post);
