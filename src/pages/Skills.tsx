import styled from 'styled-components';
import { media } from '../components/utils/_media-queries';
import { Colors, GlobalStyle } from '../components/utils/_var';

const SkillWrapper = styled.div`
  .field {
    text-align: center;
    padding-top: 1rem;
    font-weight: bold;
  }
  .container {
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    align-content: space-around;
    ${media.tablet`max-width: 40rem; height: 70rem;`}
    ${media.laptop`max-width: 60rem; height: 48rem;`}
    background-color: lavenderblush;
  }
  .image-container {
    width: 17rem;
    margin: 1rem;
    background-color: gray;
    background-color: white;
    border-radius: 15px;
    box-shadow: 10px 10px 10px rgba(100, 100, 100, .2);
  }
  .image {
    width: 15rem;
    margin: .2rem 1rem;
    padding: 1rem .5rem;
    text-align: center;
    justify-content: center;
    background-color: white;
  }
`;

// ==================================================================
//                               TO DO
// ==================================================================
//   1. CSS: 카드 box-shadow, field

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
    </SkillWrapper>
  );
}

export default Skills;
