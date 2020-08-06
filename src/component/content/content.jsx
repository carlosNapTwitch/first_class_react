import React from 'react';

const ContentComponent = ({ children }) => {
    const contentStyle = {
        float: 'left',
        width: '85%',
        height: '95%',
        padding: '1%'
    }

    return (
        <div style={contentStyle}>
            {children}
        </div>
    )
}

export default ContentComponent;