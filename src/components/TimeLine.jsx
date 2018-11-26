import React from "react";
import TimeLinePost from "./TimeLinePost";
import TimeLineFeed from "./TimeLineFeed";
import PropTypes from "prop-types";



class TimeLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masterTimeLineList: [
                {
                    tweet: "Hello I'm Connor",
                    likes: 0
                }
            ]
        };
        this.handleAddingNewPostToTimeline = this.handleAddingNewPostToTimeline.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }



    handleAddingNewPostToTimeline(newPost) {
        var newMasterTimeLineList = this.state.masterTimeLineList.slice();
        newMasterTimeLineList.push(newPost);
        this.setState({ masterTimeLineList: newMasterTimeLineList });
    }
    handleDelete(newPost) {
        var newMasterTimeLineList = this.state.masterTimeLineList.slice();
        newMasterTimeLineList.splice(this.state.masterTimeLineList.indexOf(newPost), 1);
        this.setState({ masterTimeLineList: newMasterTimeLineList });
    }

    handleLike(newPost) {
        console.log(newPost);
        var newMasterTimeLineList = this.state.masterTimeLineList.slice();
        var index = this.state.masterTimeLineList.indexOf(newPost);
        newPost.likes++;
        newMasterTimeLineList[index]=newPost;
        this.setState({ masterTimeLineList: newMasterTimeLineList });
    }

    render() {
        return (
            <div>
                <TimeLinePost onNewPostControl={this.handleAddingNewPostToTimeline} />

                <div className="test">
                    {this.state.masterTimeLineList.map((post, index) => (
                        <TimeLineFeed onDelete={this.handleDelete} onLike={()=>this.handleLike(post)}
                            tweet={post.tweet}
                            likes={post.likes}
                            key={index}
                        />
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