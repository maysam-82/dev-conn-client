import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { routes } from '../../../routes';
import history from '../../../history';
import { addLike, removeLike, deletePost } from '../../../redux/actions/posts';
import { selectProfile } from '../../../redux/actions/profile';

const Post = ({
    post: { _id: postId, text, name, avatar, user, likes, comments, date },
    auth,
    addLike,
    removeLike,
    deletePost,
    selectProfile,
}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <div
                    className="select-profile"
                    onClick={() => selectProfile(user)}
                >
                    <img className="round-img" src={avatar} alt={name} />
                    <h4>{name}</h4>
                </div>
            </div>
            <div>
                <p className="my-1">{text}</p>
                <p className="post-date">
                    Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
                </p>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => addLike(postId)}
                >
                    <i className="fas fa-thumbs-up"></i>{' '}
                    {likes.length > 0 && <span>{likes.length}</span>}
                </button>
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => removeLike(postId)}
                >
                    <i className="fas fa-thumbs-down"></i>
                </button>
                <div
                    className="btn btn-primary"
                    onClick={() => history.push(`${routes.POST}/${postId}`)}
                >
                    Discussion{' '}
                    {comments.length > 0 && (
                        <span className="comment-count">{comments.length}</span>
                    )}
                </div>
                {!auth.loading && user === auth.user._id && (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deletePost(postId)}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    selectProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {
    addLike,
    removeLike,
    deletePost,
    selectProfile,
})(Post);
