import React from 'react';
import {connect} from
import {connect} from 'react-redux';

class SortingTitle extends React.Component {

    Click = (event) => {
        {
            console.log(event.target)
        }
    }

    render() {
        return (
            <div className="bg-primary">
                <button className="btn btn-dark" onClick={this.Click}>ascend</button>
                <button className="btn btn-dark" onClick={this.Click}>descend</button>
                <button className="btn btn-dark" onClick={this.Click}>Default</button>
            </div>)
    }
}

export default SortingTitle;