import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppUl.css';

class AppUl extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className="listPost">
                {items.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <h5>{index + 1}. {item.title.toUpperCase()}</h5>
                            <p>{item.body.slice(0, 200)}</p>
                        </div>
                    )
                })}
            </div>
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