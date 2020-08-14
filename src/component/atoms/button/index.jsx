import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
    cursor: pointer;
    padding: 7%;
    border: 0;
    display: block;
    background: ${({ variant }) => {
        switch (variant) {
            case 'primary': return 'green';
            case 'secondary': return 'pink';
            case 'danger': return 'red';
        }
    }}
`;

export default CustomButton;