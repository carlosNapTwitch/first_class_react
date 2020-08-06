import React from 'react';

const SideBar = ({ onSelectPage }) => {

    const sideStyle = {
        backgroundColor: '#e3e3e3',
        width: '15%',
        height: '95%',
        padding: '1%',
        float: 'left'
    }

    const menuItem = {
        cursor: 'pointer',
        padding: '1%',
        marginBottom: '3%'
    }

    const pages = [{
        label: 'My Home',
        page: 'home'
    },
    {
        label: 'About Us',
        page: 'about'
    }];

    return (
        <div style={sideStyle}>
            {
                pages.map((item, idx) => (<div style={menuItem} key={idx} onClick={() => { onSelectPage(item.page) }} >{item.label}</div>))
            }
        </div>
    )
}

export default SideBar;