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
    margin: 1.5rem 1.5rem 0;
    min-height: 26rem;
    ${media.large`margin: 1.5rem auto 0; max-width: 75rem;`}
    background-color: ${Colors.beige};
    border-top: 3px solid ${Colors.black};
    border-left: 3px solid ${Colors.black};
    border-right: 3px solid ${Colors.black};
  }
  .icon {
    margin-right: 1rem;
    width: 2.75rem;
    vertical-align: top;
  }
  .container {
    background-color: white;
    border: 2px solid black;
    box-shadow: 6px 6px ${Colors.mediumGray};
    margin: auto;
    font-size: 0.9rem;
    padding: 1.5rem 1rem;
    height: 24.5rem;
    width: 80%;
    min-width: 17rem;
    text-align: center;
    justify-content: center;
    ${media.tablet`display: grid; padding: 2rem 1rem; text-align: left; width: 42rem; height: 15rem;`}
    ${media.laptop`width: 57.5rem; height: 16rem; font-size: 1rem; padding: 3rem 1.5rem;`}
    ${media.tablet`grid-template-areas:
      'info birth'
      'education mobile'
      'email github';
   `}
    ${media.tablet`grid-template-columns: 50% 50%;`}
    ${media.laptop`grid-template-areas:
      'info birth education'
      'mobile email github';`}
    ${media.laptop`grid-template-columns: 33% 33% 33%;`}
  }
  .info-container {
    display: inline-block;
  }
  .name,
  .birth,
  .education,
  .mobile,
  .github,
  .email {
    margin: 0 auto;
    ${media.laptop`margin: .3rem auto 0;`}
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
  .field {
    text-align: left;
    padding-left: 1.5rem;
    font-size: 0.9rem;
    ${media.laptop`font-size: 1.1rem;`}
    font-weight: bold;
  }
  .content {
    width: 10rem;
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    text-align: left;
    font-size: 0.9rem;
    ${media.tablet`width: 12rem; margin-bottom: auto;`}
    ${media.laptop`font-size: 1rem;`}
    /* background-color: lime; */
  }
  a {
    color: black;
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
