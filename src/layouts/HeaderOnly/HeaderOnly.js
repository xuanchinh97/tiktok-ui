import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            HeaderOnly
            <Header />
            <div className="container">
                <div className="content"> {children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
