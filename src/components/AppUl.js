import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppUl.css';

class AppUl extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => 
                    <li key={item.id}>
                        {item.body}
                    </li>)
                }
            </ul>
        )
    }
}

AppUl.protoTypes = {
    items: PropTypes.array
}

AppUl.defaultProps = {
    items: []
}
export default AppUl;