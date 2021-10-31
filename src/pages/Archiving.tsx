import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { media } from '../components/utils/_media-queries';
import { Colors, GlobalStyle } from '../components/utils/_var';

const ArchivingWrapper = styled.div`
  .main {
    min-height: 22rem;
    background-color: mediumorchid;
  }
  .container {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    ${media.tabletMini`max-width: 30rem;`}
    ${media.tablet`max-width: 50rem;`}
    ${media.laptop`max-width: 60rem;`}
    background-color: salmon;
  }
  .card {
    margin: 1rem auto;
    padding: 1.2rem;
    width: 22rem;
    height: 13rem;
    background-color: white;
    border-radius: 15px;
  }
  .field {
    display: inline-block;
    margin-right: 0.4rem;
    font-size: 1.8rem;
    vertical-align: middle;
  }
  .link,
  .description {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
  .link {
    cursor: pointer;
    display: block;
    &:hover {
      color: pink;
    }
  }
  .description {
    line-height: 1.6rem;
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
              P5.js, ML5.js, Scratch, GAN 등을 활용한 여러 창의적인 프로젝트 기록 웹사이트입니다.
            </div>
          </a>
        </div>
      </div>
    </ArchivingWrapper>
  );
}

export default Archiving;
