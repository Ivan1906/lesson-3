import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppLi.css';

class AppLi extends Component {
    render() {
        return(
            <div className="listPost">
                <div key={item.id} className="post">
                    <h5>{index + 1}. {item.title.toUpperCase()}</h5>
                    <p>{item.body.slice(0, 200)}</p>
                </div>
            </div>
        )
    }
}