import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../redux/actions/posts';

const CommentForm = ({ addComment, postId }) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment({ text }, postId);
        setText('');
    };

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Leave a Comment</h3>
            </div>
            <form className="form my-1" onSubmit={handleSubmit}>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Create a post"
                    required
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                ></textarea>
                <input
                    type="submit"
                    className="btn btn-dark my-1"
                    value="Submit"
                />
            </form>
        </div>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
};

export default connect(null, { addComment })(CommentForm);
