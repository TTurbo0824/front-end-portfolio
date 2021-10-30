import { css } from 'styled-components';

const sizes: any = {
  tabletMini: 480,
  tablet: 768,
  laptop: 1024,
  large: 1280
};

export const media = Object.keys(sizes).reduce((accumulator: any, label: any) => {
  const pixSize = sizes[label];
  accumulator[label] = (...args: any) => css`
    @media (min-width: ${pixSize}px) {
      ${css.apply(null, args)}
    }
  `;
  return accumulator;
}, {});
