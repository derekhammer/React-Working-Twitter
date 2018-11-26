import React from "react";
import PropTypes from "prop-types";

function TimeLineFeed(props) {

    const feedStyle = {
        paddingTop: "3%",
        height: "100%",
        border: "1px grey solid"
    }


    const imgStyle = {
        background: "white",
        marginTop: "10px"
    }

    const titleStyle = {
        fontWeight: "Bold"
    }
    const descStyle = {
        // borderTop: "1px grey solid",
        // borderBottom: "1px grey solid"

    }

    return (
        <div style={feedStyle}>
        {console.log(props)}
            <div className="col-3">
                <img style={imgStyle} src="https://img.icons8.com/ios/50/27ae60/panda-filled.png"></img>

            </div>
            <div className="col-9" style={descStyle}>
                <div style={titleStyle}>
                    Lorem ipsum
                </div>
                <div >
                    {props.tweet}
            </div>
            </div>
        </div>
    );
}

TimeLineFeed.propTypes = {
    tweet : PropTypes.string
}


export default TimeLineFeed;