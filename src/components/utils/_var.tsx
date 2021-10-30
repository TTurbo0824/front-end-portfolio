import { createGlobalStyle } from 'styled-components';

const Colors = {
  black: '#303030',
  darkGray: '#575757',
  gray: '#7a7a7a',
  mediumGray: '#a7a7a7',
  lightGray: '#e0e2e3',
  lightYellow: '#ffcd01',
  yellow: '#ffba01',
  darkYellow: '#ffba01'
};

const GlobalStyle = createGlobalStyle`
  .title {
    margin: 2rem auto 1rem;
    text-align: center;
    font-size: 3.5rem;
  }
`;

export { Colors, GlobalStyle };
