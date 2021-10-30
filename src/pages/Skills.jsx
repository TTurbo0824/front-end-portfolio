import styled from 'styled-components';

const SkillWrapper = styled.div`
  .main {
    /* display: flex; */
    min-height: calc(100vh - 10.9rem);
    background-color: lime;
  }
`;

function Skills () {
  return (
    <SkillWrapper>
      <div className='main'>
        Skills
      </div>
    </SkillWrapper>
  );
}

export default Skills;
