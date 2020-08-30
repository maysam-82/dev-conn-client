import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions/posts';

const Posts = ({ getPosts, posts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    console.log(posts);
    return <div>Posts</div>;
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    posts: state.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);
