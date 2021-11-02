import { createGlobalStyle } from 'styled-components';

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
    padding: 2rem;
    text-align: center;
    font-size: 3.5rem;
    text-transform: uppercase;
    font-family: 'Anton';
  }
`;

export { Colors, GlobalStyle };
