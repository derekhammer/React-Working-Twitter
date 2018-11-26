import React from "react";
import PropTypes from "prop-types";
import TimeLine from "./TimeLine";


function TimeLinePost(props) {
    let _post = null;
    const otherStyle = {
        height: "100px",
        border: "1px grey solid",
        backgroundColor: "lightblue",
        width: "100%",
        margin: "0"
    }
    const inputStyle = {
        display: "block",
        marginLeft: "80px",
        paddingTop: "20px",
        marginTop: "30px",
        width: "75%",
        textAlign: "center",
        border: "1px solid blue"
    }

    function postNewTweet(event){
        props.onNewPostControl({tweet: _post.value})
        event.preventDefault();
        _post.value = '';
    }

    return (
        <div style={otherStyle}>
            <form onSubmit={postNewTweet}>
                <input type="text" ref={(input) => {_post = input;}} style={inputStyle} placeholder="What is Happening?" ></input>
                <button type='submit'>Post</button>
        
            </form>
        </div>
    );
}

TimeLinePost.propTypes = {
    onNewPostControl: PropTypes.func
  };

export default TimeLinePost;