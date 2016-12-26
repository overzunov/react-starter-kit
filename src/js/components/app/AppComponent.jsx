import React from 'react';
import Header from '../header/Header';
require('./app.scss');

export default function (props) {
    return (
        <div>
            <Header />
            <div className="content container">
                {props.children}
            </div>
        </div>
    )
}