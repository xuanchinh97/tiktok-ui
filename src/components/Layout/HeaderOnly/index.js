import React from 'react';
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

export default HeaderOnly;
