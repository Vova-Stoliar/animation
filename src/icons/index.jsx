import React from 'react';
import styled from 'styled-components';

export const DownIcon = styled((props) => {
    const { className } = props;

    return (
        <div className={className}>
            <svg width="18" height="19" fill="none">
                <g clipPath="url(#a)">
                    <path
                        fill="#FCFCFC"
                        d="M13.5 6.687a.562.562 0 0 0-.4.163L9 10.956 4.9 6.85a.565.565 0 0 0-.8.798l4.5 4.5a.562.562 0 0 0 .8 0l4.5-4.5a.563.563 0 0 0-.4-.961Z"
                    />
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 .5h18v18H0z" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
})`
    display: flex;
`;

export const MenuIcon = styled((props) => {
    const { className } = props;

    return (
        <div className={className}>
            <svg width="48" height="48" fill="none">
                <g fill="#FCFCFC">
                    <rect width="20" height="3" x="10" y="15" rx="1.5" />
                    <rect width="28" height="3" x="10" y="22" rx="1.5" />
                    <rect width="20" height="3" x="18" y="29" rx="1.5" />
                </g>
            </svg>
        </div>
    );
})`
    display: flex;
`;
