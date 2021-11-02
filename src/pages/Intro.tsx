import styled from 'styled-components';
import { media } from '../components/utils/_media-queries';
import { Colors } from '../components/utils/_var';

const IntroWrapper = styled.div`
  .main {
    min-height: 9.75rem;
    margin: 0 1.5rem;
    ${media.tablet`min-height: 10.75rem;`}
    ${media.large`margin: 0 auto; max-width: 75rem; min-height: 11.5rem;`}
    background-color: ${Colors.beige};
    border-left: 3px solid ${Colors.backgroundColor};
    border-right: 3px solid ${Colors.backgroundColor};
    font-family: 'Black Han Sans';
  }
  .intro-title {
    margin: 2rem auto;
    padding-top: 1.75rem;
    padding-bottom: 0;
    text-align: center;
    font-size: 3.2rem;
    ${media.tablet`padding-top: 1.8rem; font-size: 3.8rem;`}
    text-transform: uppercase;
    font-family: 'Black Han Sans';
  }
  .container {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    ${media.tabletMini`max-width: 30rem;`}
    ${media.tablet`max-width: 45rem;`}
    ${media.laptop`max-width: 62rem;`}
  }
  .intro {
    margin: -1.25rem auto 0;
    text-align: center;
    font-size: 1.5rem;
    ${media.tablet`font-size: 1.75rem;`}
    font-family: 'Do Hyeon';
    width: fit-content;
    border-bottom: 2px solid black;
  }
`;

function Intro() {
  return (
    <IntroWrapper>
      <div className="main">
        <div className="intro-title">하경주</div>
        <div className="intro">웹 개발자 포트폴리오</div>
        <div className="container"></div>
      </div>
    </IntroWrapper>
  );
}

export default Intro;
