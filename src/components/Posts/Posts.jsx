import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions/posts';
import Post from './Post/Post';

const Posts = ({ getPosts, posts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    const renderPosts =
        posts &&
        posts.length > 0 &&
        posts.map((post) => <Post key={post._id} post={post} />);

    return (
        <Fragment>
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Welcome to the community
            </p>
            {/* TODO: POST FORM */}
            <div className="posts">{renderPosts}</div>
        </Fragment>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);
