import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { media } from '../components/utils/_media-queries';
import { Colors, GlobalStyle } from '../components/utils/_var';

const ArchivingWrapper = styled.div`
  .main {
    min-height: 22rem;
    margin: 1.5rem 1.5rem 0;
    ${media.laptop`height: 26rem;`}
    ${media.large`margin: 1.5rem auto 0; max-width: 75rem;`}
    background-color: ${Colors.beige};
    border-left: 3px solid ${Colors.backgroundColor};
    border-right: 3px solid ${Colors.backgroundColor};
  }
  .container {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    ${media.tabletMini`max-width: 30rem;`}
    ${media.tablet`max-width: 45rem;`}
    ${media.laptop`max-width: 62rem;`}
  }
  .card {
    margin: 0rem auto 1rem;
    padding: 1.5rem;
    width: 22rem;
    height: 14rem;
    ${media.tablet`width: 20rem; height: 14rem; margin: 0.5rem auto;`}
    ${media.laptop`width: 24rem; height: 14rem;`}
    background-color: white;
    border: 2px solid black;
    box-shadow: 6px 6px ${Colors.mediumGray};
  }
  .field {
    display: inline-block;
    margin-right: 0.4rem;
    font-size: 1.9rem;
    ${media.laptop`font-size: 2rem;`}
    vertical-align: middle;
    font-family: 'Staatliches';
  }
  .link,
  .description {
    font-size: 1.1rem;
    padding: 0.5rem 0;
  }
  .link {
    cursor: pointer;
    display: block;
    margin-top: 0.4rem;
    font-family: 'Merriweather';
    color: ${Colors.gray};

    &:hover {
      color: black;
    }
  }
  .description {
    line-height: 1.6rem;
    padding-bottom: 1rem;
  }
  a {
    color: black;
  }
`;

function Archiving() {
  return (
    <ArchivingWrapper>
      <GlobalStyle />
      <div className="main">
        <div className="title">Archiving</div>
        <div className="container">
          <a
            className="card"
            href="https://github.com/TTurbo0824"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon className="field" icon={faGithub} size="1x" />
            <div className="field">GitHub</div>
            <div className="link">github.com/TTurbo0824</div>
            <div className="description">
              과거 프로젝트, 개발한 앱의 소스 코드, 알고리즘 문제 풀이 등을 저장한 코드
              저장소입니다.
            </div>
          </a>
          <a
            className="card"
            href="https://hakyungjoo.com"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon className="field" icon={faPalette} size="1x" />
            <div className="field">Creative Portfolio</div>
            <div className="link">hakyungjoo.com</div>
            <div className="description">
              p5.js, ml5.js, Scratch, GAN 등을 활용한 여러 창의적인 프로젝트 기록 웹사이트입니다.
            </div>
          </a>
        </div>
      </div>
    </ArchivingWrapper>
  );
}

export default Archiving;
