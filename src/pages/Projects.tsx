import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { media } from '../components/utils/_media-queries';
import { Colors, GlobalStyle } from '../components/utils/_var';

const ProjectWrapper = styled.div`
  .main {
    margin: 1.5rem 1.5rem 0;
    min-height: 22rem;
    ${media.large`margin: 1.5rem auto 0; max-width: 75rem;`}
    background-color: ${Colors.beige};
    border-bottom: 3px solid ${Colors.backgroundColor};
    border-left: 3px solid ${Colors.backgroundColor};
    border-right: 3px solid ${Colors.backgroundColor};
  }
  .container {
    display: flex;
    margin: auto;
  }
  .container:last-child {
    margin-bottom: 1.5rem;
  }
  .card {
    display: grid;
    grid-template-areas: 'title' 'slide' 'explanation';
    grid-template-columns: 100%;
    ${media.laptop`grid-template-areas: 'title title' 'slide explanation';`}
    ${media.laptop`grid-template-columns: 50% 50%;`}
    margin: .5rem auto 1.5rem;
    border: 2px solid black;
    min-height: 20rem;
    width: 85%;
    ${media.tablet`width: 42rem; padding-bottom: 1.75rem;`}
    ${media.laptop`width: 55rem; min-height: 25rem; margin: .5rem auto 1.75rem;`}
    background-color: white;
    padding: 1.5rem;
    padding-top: 1rem;
    box-shadow: 6px 6px ${Colors.mediumGray};
  }
  .field {
    grid-area: title;
    font-size: 1.5rem;
    font-family: 'Staatliches';
    text-align: center;
    padding-bottom: 1rem;
  }
  .korean {
    display: inline;
    font-weight: normal;
    margin-right: 0.2rem;
    font-family: 'Do Hyeon';
    font-size: 1.35rem;
  }
  .alice-carousel ul li img {
    width: 12rem;
    ${media.tablet`width: 23rem;`}
    object-fit: cover;
    margin: auto;
  }
  .alice-carousel {
    justify-content: left;
    width: 12rem;
    ${media.tablet`width: 23rem;`}
  }
  .image-container {
    grid-area: slide;
  }
  .content {
    grid-area: explanation;
    line-height: 1.5rem;
  }
  a {
    padding: 0;
    color: ${Colors.gray};
  }
  a:hover {
    color: black;
  }
  .content > ul {
    margin: 0;
    padding-left: 2rem;
  }
  .link:not(:first-child) {
    margin-left: 0.4rem;
  }
  .link {
    margin-right: 0.4rem;
  }
  .line {
    padding-bottom: 0.25rem;
  }
  .line:not(:first-child) {
    padding-top: 0.25rem;
  }
  .line:last-child {
    padding-top: 0.5rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

function Projects() {
  const handleDragStart = (e: any) => e.preventDefault();

  const WalkingDogList = ['walkingdog_1', 'walkingdog_2', 'walkingdog_3', 'walkingdog_4'];
  const WalkingDogItems = WalkingDogList.map((image, idx) => (
    <img
      src={`https://tturbo0824.github.io/front-end-portfolio/images/projects/${image}.png`}
      key={idx}
      alt={`${image}_${idx}`}
      className="img"
      onDragStart={handleDragStart}
    />
  ));

  const M4MList = ['m4m_1', 'm4m_2', 'm4m_3', 'm4m_4', 'm4m_5'];
  const M4MItems = M4MList.map((image, idx) => (
    <img
      src={`https://tturbo0824.github.io/front-end-portfolio/images/projects/${image}.png`}
      key={idx}
      alt={`${image}_${idx}`}
      className="img"
      onDragStart={handleDragStart}
    />
  ));

  const MunjiOutList = ['munjiout_1', 'munjiout_2', 'munjiout_3', 'munjiout_4'];
  const MunjiOutItems = MunjiOutList.map((image, idx) => (
    <img
      src={`https://tturbo0824.github.io/front-end-portfolio/images/projects/${image}.png`}
      key={idx}
      alt={`${image}_${idx}`}
      className="img"
      onDragStart={handleDragStart}
    />
  ));

  const HaZaList = ['haza_1', 'haza_2', 'haza_3'];
  const HaZaItems = HaZaList.map((image, idx) => (
    <img
      src={`https://tturbo0824.github.io/front-end-portfolio/images/projects/${image}.png`}
      key={idx}
      alt={`${image}_${idx}`}
      className="img"
      onDragStart={handleDragStart}
    />
  ));

  return (
    <ProjectWrapper>
      <GlobalStyle />
      <div className="main">
        <div className="title">Projects</div>
        <div className="container">
          <div className="card">
            <div className="field">
              <div className="korean">워킹도그</div> (WalkingDog)
            </div>
            <div className="image-container">
              <AliceCarousel mouseTracking infinite={true} items={WalkingDogItems} />
            </div>
            <div className="content">
              <div className="line">방문 도그워커 검색 및 반려견 산책 서비스</div>
              <div className="line">프로젝트 기간: 2021.10 - 2022.1 (1인 / 10주 개인 프로젝트)</div>
              <div className="line">
                <a
                  href="http://walkingdog.site"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  🔗 배포 링크
                </a>
                |
                <a
                  href="https://github.com/TTurbo0824/WalkingDog"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
                |
                <a
                  href="https://github.com/TTurbo0824/WalkingDog/wiki"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  기획서
                </a>
              </div>
              <div className="line">업무내용</div>
              <ul>
                <li>
                  프론트엔드: 랜딩 페이지, 메인 페이지, 로그인/회원가입 모달, 회원 전용 페이지,
                  도그워커 페이지 구현
                </li>
                <li>
                  백엔드: 로그인/회원가입 관련 기능, 체험하기 기능, 회원 정보 관련 기능, 도그워커
                  조회/검색 기능, 반려견 산책 요청/취소 기능, 이용 서비스 평점/후기 등록/수정/삭제
                  기능
                </li>
                <li>배포: EC2, S3, RDS 등 AWS 서비스를 통한 배포</li>
              </ul>
              <div className="line">
                사용 스택: React, Redux, styled-components, Node.js, Express.js, MySQL, Sequelize
                ORM, JWT, OAuth 2.0, AWS (EC2, RDS, S3, Route 53)
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="field">Music for Millennials (M4M)</div>
            <div className="image-container">
              <AliceCarousel mouseTracking infinite={true} items={M4MItems} />
            </div>
            <div className="content">
              <div className="line">밀레니얼 세대를 타겟층으로 한 음악 검색 및 추천 서비스</div>
              <div className="line">프로젝트 기간: 2021.09 - 2021.10 (4인 / 4주 팀 프로젝트)</div>
              <div className="line">포지션: Full Stack, Team Leader</div>
              <div className="line">
                <a
                  href="https://music4millennials.live/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  🔗 배포 링크
                </a>
                |
                <a
                  href="https://github.com/codestates/M4M"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
                |
                <a
                  href="https://github.com/codestates/M4M/wiki"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  기획서
                </a>
              </div>
              <div className="line">담당업무</div>
              <ul>
                <li>프로젝트 총괄: 업무 분담 및 전반적인 개발 상황 관리</li>
                <li>
                  프론트엔드: 회원 정보 페이지, 곡 상세 정보 페이지, 음악 추천 페이지 구현, 반응형
                  웹 구현
                </li>
                <li>
                  백엔드: 회원 정보 조회 및 수정 기능, 관심 노래 설정 기능, 회원 탈퇴 기능, 전체 곡
                  조회 기능, 음악 추천 기능 구현
                </li>
                <li>
                  배포: CodePipeline, CloudFront 등 AWS 서비스를 통한 배포 자동화 구축 및 HTTPS 적용
                </li>
              </ul>
              <div className="line">
                사용 스택: React, Redux, styled-components, Node.js, Express.js, MySQL, Sequelize
                ORM, AWS (EC2, RDS, S3, CodePipeline, CloudFront, Route 53)
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="field">
              <div className="korean">먼지아웃</div> (MunjiOut)
            </div>
            <div className="image-container">
              <AliceCarousel mouseTracking infinite={true} items={MunjiOutItems} />
            </div>
            <div className="content">
              <div className="line">실시간 미세먼지 수치 검색 및 알람 서비스</div>
              <div className="line">프로젝트 기간: 2021.08 - 2021.09 (4인 / 2주 팀 프로젝트)</div>
              <div className="line">포지션: Back-end</div>
              <div className="line">
                <a
                  href="http://munjiout.com/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  🔗 배포 링크
                </a>
                |
                <a
                  href="https://github.com/codestates/MunjiOut"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
                |
                <a
                  href="https://github.com/codestates/MunjiOut/wiki"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  기획서
                </a>
              </div>
              <div className="line">담당업무</div>
              <ul>
                <li>
                  백엔드: 외부 API 호출 로직 개발, 회원 로그인/로그아웃 기능, JWT 토큰 인증 방식
                  구축, 검색 기능, 메인페이지 조회 기능, 미세먼지 알람 이메일 발송 기능 구현
                </li>
                <li>배포: AWS(EC2, S3, RDS)를 통한 배포</li>
              </ul>
              <div className="line">
                사용스택: Node.js, Express.js, JWT, MySQL, Sequelize, ORM, AWS, EC2, S3, RDS, Route
                53
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="field">
              <div className="korean">하자</div>(Ha-Za)
            </div>
            <div className="image-container">
              <AliceCarousel mouseTracking infinite={true} items={HaZaItems} />
            </div>
            <div className="content">
              <div className="line">칸반 시스템에서 영감을 받은 To Do 관리 서비스</div>
              <div className="line">프로젝트 기간: 2021.10 - 2021.11 (4인 / 2주 팀 프로젝트)</div>
              <div className="line">포지션: Full Stack</div>
              <div className="line">
                <a
                  href="https://ha-za.live/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  🔗 배포 링크
                </a>
                |
                <a
                  href="https://github.com/Ha-Za/Ha-Za"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
                |
                <a
                  href="https://github.com/Ha-Za/Ha-Za/wiki"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  기획서
                </a>
              </div>
              <div className="line">담당업무</div>
              <ul>
                <li>
                  프론트엔드: 로그인 모달, 회원 가입 모달, 회원 정보 페이지, To Do 추가/편집/삭제
                  기능 구현
                </li>
                <li>백엔드: To Do 편집 기능 구현</li>
              </ul>
              <div className="line">사용 스택: TypeScript, React, Redux, styled-components</div>
            </div>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}

export default Projects;
