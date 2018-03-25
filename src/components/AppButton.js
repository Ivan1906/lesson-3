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
        const { text } = this.props;
        return(
            <input type="button"
                className="AppButton" 
                value={text}
                onClick={this.onClickChild} />
        )
    }
}

AppButton.protoTypes = {
    text: PropTypes.string,
    onclick: PropTypes.func
}

AppButton.defaultProps = {
    text: "Записів для добавлення не має"
}

export default AppButton;