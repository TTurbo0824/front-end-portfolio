import styled from 'styled-components';
import { media } from '../components/utils/_media-queries';
import { Colors, GlobalStyle } from '../components/utils/_var';

const SkillWrapper = styled.div`
  .main {
    margin: 0 1.5rem;
    ${media.large`margin: 0 auto; max-width: 75rem;`}
    min-height: 22rem;
    background-color: ${Colors.beige};
    border-left: 3px solid ${Colors.black};
    border-right: 3px solid ${Colors.black};
  }
  .field {
    text-align: center;
    /* font-family: 'Merriweather'; */
    font-family: 'Arial';
    font-size: 1rem;
    padding: 0.3rem;
    font-weight: bold;
    width: 100%;
    border-bottom: 2px solid black;
  }
  .container {
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    align-content: space-around;
    ${media.tablet`max-width: 40rem; height: 70rem;`}
    ${media.laptop`max-width: 60rem; height: 44rem;`}
    /* background-color: lavenderblush; */
  }
  .image-container {
    width: 17rem;
    margin: 0.5rem auto 1.2rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border-radius: 15px; */
    /* box-shadow: 10px 10px 10px rgba(100, 100, 100, 0.2); */
    border: 2px solid black;
    box-shadow: 6px 6px ${Colors.mediumGray};
  }
  .image {
    width: 13rem;
    margin: 1rem 1rem;
    padding: 1rem 0.5rem;
    text-align: center;
    justify-content: center;
    background-color: white;
    /* background-color: ${Colors.beige}; */
  }
`;

// ==================================================================
//                               TO DO
// ==================================================================

function Skills() {
  type ObjType = {
    [index: string]: string;
  };

  const skillList: ObjType = {
    Language: 'language',
    'Version Control': 'version-control',
    'Front-End': 'front-end',
    Design: 'design',
    'Back-End': 'back-end',
    Deploymemt: 'deployment'
  };

  return (
    <SkillWrapper>
      <GlobalStyle />
      <div className="main">
        <div className="title">Skills</div>
        <div className="container">
          {Object.keys(skillList).map((skill, idx) => {
            return (
              <div className="image-container" key={idx}>
                <div className="field">{skill}</div>
                <img
                  className="image"
                  src={`/images/${skillList[skill]}.png`}
                  alt={skillList[skill]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </SkillWrapper>
  );
}

export default Skills;
