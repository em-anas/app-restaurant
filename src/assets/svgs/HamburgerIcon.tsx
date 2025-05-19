import React from 'react';

type HamburgerIconProps = {
    open: boolean;
};

const HamburgerIcon: React.FC<React.SVGProps<SVGSVGElement> & HamburgerIconProps> = ({ open, height, width, fill: fillColor = `var(--color-secondary)`, ...props }) => (
    <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect
            y="6"
            width="28"
            height="3"
            rx="1.5"
            fill={fillColor}
            style={{
                transition: 'transform 0.3s',
                transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
        />
        <rect
            y="13"
            width="28"
            height="3"
            rx="1.5"
            fill={fillColor}
            style={{
                opacity: open ? 0 : 1,
                transition: 'opacity 0.3s',
            }}
        />
        <rect
            y="15"
            width="28"
            height="3"
            rx="1.5"
            fill={fillColor}
            style={{
                transition: 'transform 0.3s',
                transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
        />
        <rect
            y="17"
            width="28"
            height="3"
            rx="1.5"
            fill={fillColor}
            style={{
                transition: 'transform 0.3s',
                transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
        />
    </svg>
);

export default HamburgerIcon; 