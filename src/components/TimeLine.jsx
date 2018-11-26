import React from "react";
import TimeLinePost from "./TimeLinePost";
import TimeLineFeed from "./TimeLineFeed";
import PropTypes from "prop-types";

class TimeLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterTimeLineList: []
        };
        this.handleAddingNewPostToTimeline = this.handleAddingNewPostToTimeline.bind(this);

    }

    handleAddingNewPostToTimeline(newPost) {
        var newMasterTimeLineList = this.state.masterTimeLineList.slice();
        newMasterTimeLineList.push(newPost);
        this.setState({ masterTimeLineList: newMasterTimeLineList });
    }

    render() {
        return (
            <div>
                <TimeLinePost onNewPostControl={this.handleAddingNewPostToTimeline}/>

                <div className="test">
                    {this.state.masterTimeLineList.map((post, index) => (
                        <TimeLineFeed tweet={post.post}
                            key={index} />
                    ))}
                </div>
            </div>

        );
    }
}

TimeLine.propTypes = {
    onNewPostControl: PropTypes.func
  };

export default TimeLine;