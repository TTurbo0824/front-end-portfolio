import { createGlobalStyle } from 'styled-components';
import { media } from './_media-queries';

const Colors = {
  black: '#303030',
  darkGray: '#544e5a',
  gray: '#7a7a7a',
  mediumGray: '#a7a7a7',
  lightGray: '#e0e2e3',
  backgroundColor: '#252525',
  beige: '#fefaef'
};

const GlobalStyle = createGlobalStyle`
  .title {
    margin: 0 auto;
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    font-size: 3rem;
    ${media.tablet`font-size: 3.5rem;`}
    text-transform: uppercase;
    font-family: 'Anton';
  }
`;

export { Colors, GlobalStyle };
