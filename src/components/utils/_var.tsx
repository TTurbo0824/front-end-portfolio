import { createGlobalStyle } from 'styled-components';

/*
#fff0edGrey
#fd6b6bPink
#544e5aGrey
#a15b54 Brown
#7fac67Green
#a661a9Violet
#df723dOrange
#ca9650 Brown
#fcb022Orange
#d50d15red
*/

const Colors = {
  black: '#303030',
  darkGray: '#544e5a',
  gray: '#7a7a7a',
  mediumGray: '#a7a7a7',
  lightGray: '#e0e2e3',
  pink: '#fd6b6b',
  // pinkGray: '#fff0ed',
  pinkGray: 'white',
  brown: '#a15b54'
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
