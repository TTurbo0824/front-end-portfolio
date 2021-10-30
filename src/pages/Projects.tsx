import styled from 'styled-components';

const ProjectWrapper = styled.div`
  .main {
    /* display: flex; */
    min-height: calc(100vh - 10.9rem);
    background-color: cyan;
  }
`;

function Projects () {
  return (
    <ProjectWrapper>
      <div className='main'>
        Projects
      </div>
    </ProjectWrapper>
  );
}

export default Projects;
