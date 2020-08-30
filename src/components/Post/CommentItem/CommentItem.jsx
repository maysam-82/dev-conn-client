import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../../redux/actions/posts';
import { selectProfile } from '../../../redux/actions/profile';
import Moment from 'react-moment';

const CommentItem = ({
    postId,
    comment: { _id, text, name, user, date, avatar },
    deleteComment,
    auth,
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
                {!auth.loading && user === auth.user._id && (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteComment(_id, postId)}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    selectProfile: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { deleteComment, selectProfile })(
    CommentItem
);
