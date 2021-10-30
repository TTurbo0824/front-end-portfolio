import styled from 'styled-components';

const AboutWrapper = styled.div`
  .main {
    display: flex;
    min-height: calc(100vh - 10.9rem);
    background-color: lavenderblush;
  }
`;

function About () {
  return (
    <AboutWrapper>
      <div className='main'>
        About
      </div>
    </AboutWrapper>
  );
}

export default About;
