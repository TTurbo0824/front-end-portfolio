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

// interface InnerScreen {
//   tabletMini: string;
// }

const AboutWrapper = styled.div`
  .main {
    /* display: flex; */
    min-height: 22rem;
    background-color: lavenderblush;
  }
  .icon {
    margin-right: 1rem;
    width: 2.75rem;
  }

  .title {
    margin: 2rem auto 1rem;
    text-align: center;
    font-size: 3.5rem;
  }
  .field {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .container {
    display: grid;
    background-color: white;
    width: 100vw;
    height: 15rem;
    margin: auto;
    padding: 2rem 1rem;
    grid-template-areas: 'info' 'birth' 'education'
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
    font-size: 1rem;
  }
`;

function About () {
  return (
    <AboutWrapper>
      <div className='main'>
        <div className='title'>About</div>
        <div className='container'>
          <div className='name'>
            <FontAwesomeIcon className='icon' icon={faUser} size='2x' />
            <div className='info-container'>
              <div className='field'>이름</div>
              <div className='content'>하경주</div>
            </div>
          </div>
          <div className='birth'>
            <FontAwesomeIcon className='icon' icon={faCalendar} size='2x' />
            <div className='info-container'>
              <div className='field'>생년월일</div>
              <div className='content'>94.04.29</div>
            </div>
          </div>
          <div className='education'>
            <FontAwesomeIcon className='icon' icon={faGraduationCap} size='2x' />
            <div className='info-container'>
              <div className='field'>학력</div>
              <div className='content'>
                <a
                  href='https://tisch.nyu.edu/itp'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  New York University <br/>(ITP / 석사)
                </a>
              </div>
            </div>
          </div>
          <div className='mobile'>
            <FontAwesomeIcon className='icon' icon={faPhoneAlt} size='2x' />
            <div className='info-container'>
              <div className='field'>연락처</div>
              <div className='content'>010-8231-3263</div>
            </div>
          </div>
          <div className='email'>
            <FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' />
            <div className='info-container'>
              <div className='field'>이메일</div>
              <div className='content'><a href='mailto:kyungjooha13@gmail.com'>kyungjooha13@gmail.com</a></div>
            </div>
          </div>
          <div className='github'>
            <FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
            <div className='info-container'>
              <div className='field'>깃허브</div>
              <div className='content'>
                <a
                  href='https://github.com/TTurbo0824'
                  target='_blank'
                  rel='noopener noreferrer'
                >
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
