import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faEnvelope,
  faGraduationCap,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { media } from '../components/utils/_media-queries';
import { Colors, GlobalStyle } from '../components/utils/_var';

const AboutWrapper = styled.div`
  .main {
    margin: 2rem 1.5rem 0;
    min-height: 27rem;
    ${media.large`margin: 2rem auto 0; max-width: 75rem;`}
    background-color: ${Colors.beige};
    border-top: 3px solid ${Colors.black};
    border-left: 3px solid ${Colors.black};
    border-right: 3px solid ${Colors.black};
    /* background-color: lime; */
  }
  .icon {
    margin-right: 1rem;
    width: 2.75rem;
    vertical-align: top;
  }
  .field {
    font-size: 0.9rem;
    ${media.laptop`font-size: 1.1rem;`}
    font-weight: bold;
  }
  .container {
    display: grid;
    background-color: white;
    border: 2px solid black;
    box-shadow: 6px 6px ${Colors.mediumGray};
    margin: auto auto 1.5rem;
    font-size: 0.9rem;
    ${media.tablet`max-width: 50rem;`}
    ${media.laptop`max-width: 57.5rem;  margin: auto; font-size: 1rem;`}
    height: 15rem;
    padding: 2rem 1rem;
    grid-template-areas:
      'info' 'birth' 'education'
      'mobile' 'email' 'github';
    ${media.tabletMini`grid-template-areas:
      'info birth'
      'education mobile'
      'email github';
   `}
    ${media.tablet`grid-template-columns: 50% 50%;`}
    ${media.tablet`grid-template-areas:
      'info birth education'
      'mobile email github'
    ;`}
    ${media.tablet`grid-template-columns: 33% 33% 33%;`}
  }
  .info-container {
    display: inline-block;
  }
  .name {
    grid-area: info;
  }
  .birth {
    grid-area: birth;
  }
  .education {
    grid-area: education;
  }
  .mobile {
    grid-area: mobile;
  }
  .email {
    grid-area: email;
  }
  .github {
    grid-area: github;
  }
  .content {
    font-size: 0.9rem;
    ${media.laptop`font-size: 1rem;`}
  }
`;

function About() {
  return (
    <AboutWrapper>
      <GlobalStyle />
      <div className="main">
        <div className="title">About</div>
        <div className="container">
          <div className="name">
            <FontAwesomeIcon className="icon" icon={faUser} size="2x" />
            <div className="info-container">
              <div className="field">이름</div>
              <div className="content">하경주</div>
            </div>
          </div>
          <div className="birth">
            <FontAwesomeIcon className="icon" icon={faCalendar} size="2x" />
            <div className="info-container">
              <div className="field">생년월일</div>
              <div className="content">{process.env.REACT_APP_BIRTH}</div>
            </div>
          </div>
          <div className="education">
            <FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" />
            <div className="info-container">
              <div className="field">학력</div>
              <div className="content">
                <a href="https://tisch.nyu.edu/itp" target="_blank" rel="noopener noreferrer">
                  New York University <br />
                  (ITP / 석사)
                </a>
              </div>
            </div>
          </div>
          <div className="mobile">
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} size="2x" />
            <div className="info-container">
              <div className="field">연락처</div>
              <div className="content">{process.env.REACT_APP_PHONE}</div>
            </div>
          </div>
          <div className="email">
            <FontAwesomeIcon className="icon" icon={faEnvelope} size="2x" />
            <div className="info-container">
              <div className="field">이메일</div>
              <div className="content">
                <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
              </div>
            </div>
          </div>
          <div className="github">
            <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
            <div className="info-container">
              <div className="field">깃허브</div>
              <div className="content">
                <a href="https://github.com/TTurbo0824" target="_blank" rel="noopener noreferrer">
                  TTurbo0824
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
