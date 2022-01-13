import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Archiving from './Archiving';
import Projects from './Projects';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { media } from '../components/utils/_media-queries';
import { Colors } from '../components/utils/_var';

interface InnerScreen {
  showing: string;
}

interface BottomScreen {
  isShowing: string;
}
const FixedContainer = styled.div<InnerScreen>`
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${Colors.backgroundColor};
  width: 100vw;
  height: ${(props) => props.showing};
`;

const MainPageWrapper = styled.div`
  .space {
    height: 1.5rem;
    margin: 0 1.5rem;
    ${media.large`margin: 0 auto; max-width: 75rem;`}
    padding-bottom: 2rem;
    background-color: ${Colors.beige};
    border-left: 3px solid ${Colors.backgroundColor};
    border-right: 3px solid ${Colors.backgroundColor};
  }
  .menu-container {
    display: flex;
    justify-content: right;
    background-color: ${Colors.backgroundColor};
    color: ${Colors.beige};
    &.active {
      display: none;
    }
    &.deactive {
      display: flex;
    }
  }
  .menu {
    display: flex;
    justify-content: right;
    text-align: right;
    margin: 0.8rem 1.7rem 0.5rem;
  }
  .header-container {
    display: flex;
    flex-direction: column;
    background-color: ${Colors.backgroundColor};
    max-width: 100vw;
    font-family: 'Bebas Neue';
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 0;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    ${media.tablet`padding: 1.1rem 0.8rem;font-size: 1.15rem;`}
    &.active {
      margin: auto;
      display: flex;
      flex-direction: row;
      background-color: ${Colors.backgroundColor};
      justify-content: right;
    }
    &.deactive {
      display: none;
    }
  }
  .header {
    margin: auto;
  }
  a {
    text-decoration: none;
  }
  .header-container > a {
    padding-right: 1rem;
    color: ${Colors.beige};
    &:hover {
      color: ${Colors.mediumGray};
    }
  }
`;

const BottomSpace = styled.div`
  height: 1rem;
`;

const BottomFooter = styled.span<BottomScreen>`
  font-family: 'Bebas Neue';
  text-align: center;
  color: ${Colors.beige};
  font-size: 1.1rem;
  display: ${(props) => props.isShowing};
  position: absolute;
  bottom: 0%;
  left: 0%;
  margin: 0 1.5rem 1rem;
`;

function MainPage() {
  const [navState, setNavState] = useState('active');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => window.addEventListener('resize', maintainNavState));

  useEffect(() => {
    if (window.innerWidth < 768) setNavState('deactive');
  }, []);

  useEffect(() => {
    const handleScrolled = () => {
      if (!scrolled && window.scrollY > 30) {
        setScrolled(true);
      } else if (scrolled && window.scrollY <= 30) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrolled);
    return () => {
      window.removeEventListener('scroll', handleScrolled);
    };
  }, [scrolled]);

  const handleClick = () => {
    if (navState === 'active') setNavState('active');
    else if (navState === 'deactive') setNavState('close');
    else setNavState('deactive');
  };

  const maintainNavState = () => {
    if (window.innerWidth >= 768) {
      if (navState === 'active') setNavState('active');
    } else setNavState('deactive');
  };

  const endpoints = [
    {
      name: 'About',
      endpoint: '#about'
    },
    {
      name: 'Skills',
      endpoint: '#skills'
    },
    {
      name: 'Archiving',
      endpoint: '#archiving'
    },
    {
      name: 'Project',
      endpoint: '#projects'
    }
  ];

  return (
    <MainPageWrapper>
      <FixedContainer showing={navState === 'close' ? '100vh' : '3.8rem'}>
        <div className={`menu-container ${navState}`} onClick={handleClick}>
          {navState === 'deactive' ? (
            <FontAwesomeIcon className="menu" icon={faBars} size="2x" />
          ) : (
            <FontAwesomeIcon className="menu" icon={faTimes} size="2x" />
          )}
        </div>
        <div className={`header-container ${navState}`}>
          {endpoints.map((el) => (
            <>
              <AnchorLink onClick={handleClick} href={el.endpoint}>
                {el.name}
              </AnchorLink>
              <BottomSpace />
            </>
          ))}
          <a
            href="https://extreme-cork-bd1.notion.site/KJ-Ha-dc0ac56756d34e2d956028c4a80cec78"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}>
            CV
          </a>
        </div>
        <BottomFooter isShowing={navState === 'close' ? 'block' : 'none'}>
          copyright &copy; {new Date().getFullYear()} Kyungjoo Ha All rights reserved.
        </BottomFooter>
      </FixedContainer>
      <div className="space" />
      <Intro />
      <section id="about">
        <div className="space" />
        <About />
      </section>
      <section id="skills">
        <div className="space" />
        <Skills />
      </section>
      <section id="archiving">
        <div className="space" />
        <Archiving />
      </section>
      <section id="projects">
        <div className="space" />
        <Projects />
      </section>
    </MainPageWrapper>
  );
}

export default MainPage;
