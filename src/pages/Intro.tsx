import styled from 'styled-components';
import { media } from '../components/utils/_media-queries';
import { Colors } from '../components/utils/_var';

const IntroWrapper = styled.div`
  .main {
    min-height: 12rem;
    margin: 0 1.5rem;
    ${media.large`margin: 0 auto; max-width: 75rem;`}
    background-color: ${Colors.beige};
    border-left: 3px solid ${Colors.black};
    border-right: 3px solid ${Colors.black};
    font-family: 'Black Han Sans';
    /* background-color: lime; */
  }
  .intro-title {
    margin: 2rem auto;
    padding-top: 2.5rem;
    padding-bottom: 0;
    text-align: center;
    font-size: 3.8rem;
    text-transform: uppercase;
    font-family: 'Black Han Sans';
    /* background-color: palegoldenrod; */
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
    font-size: 2rem;
    font-family: 'Do Hyeon';
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
