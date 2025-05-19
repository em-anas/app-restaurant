import React from 'react';

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  height = 15,
  width = 10,
  fill: fillColor = `var(--color-white)`
}) => (
  <svg width={width} height={height} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.86597 15V8.25H7.91526L8.25 5.25H5.86597V3.78882C5.86597 3.01632 5.8857 2.25 6.96517 2.25H8.05852V0.105103C8.05852 0.0728525 7.11937 0 6.16926 0C4.185 0 2.94255 1.2429 2.94255 3.52515V5.25H0.75V8.25H2.94255V15H5.86597Z" fill={fillColor}/>
</svg>

);

