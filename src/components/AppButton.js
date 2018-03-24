import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AppButton.css";

class AppButton extends Component {
    constructor(props) {
        super(props);
        this.onClickChild = this.onClickChild.bind(this);
    }

    onClickChild() {
        this.props.onClick()
    }

    render() {
        console.log(this.props);
        console.log(this.refs);
        const { text } = this.props;
        return(
            <button 
                className="AppButton" 
                onClick={this.onClickChild}>{text}
            </button>
        )
    }
}

AppButton.protoTypes = {
    text: PropTypes.string,
    onclick: PropTypes.func
}

AppButton.defaultProps = {
    text: "10 записів"
}

export default AppButton;