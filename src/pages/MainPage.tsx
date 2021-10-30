import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { media } from '../components/utils/_media-queries';
import { Colors } from '../components/utils/_var';

interface InnerScreen {
  borderColor: string;
}

const FixedContainer = styled.div<InnerScreen>`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 3.5rem;
  background-color: white;
  width: 100vw;
  border-bottom: 1px solid rgba(150, 150, 150, 0.2);
  border-color: ${(props) => props.borderColor};
`;

const MainPageWrapper = styled.div`
  .space {
    height: 2rem;
    clear: both;
    width: 100%;
  }
  .menu-container {
    display: flex;
    background-color: cyan;
    justify-content: right;
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
    background-color: pink;
  }
  .header-container {
    display: flex;
    flex-direction: column;
    background-color: yellow;
    max-width: 100vw;
    padding: 1.4rem 0.7rem;
    &.active {
      margin: auto;
      display: flex;
      flex-direction: row;
      background-color: white;
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
    padding-right: 1rem;
    text-decoration: none;
    color: ${Colors.black};
  }
  a:hover {
    color: purple;
  }
  a:focus {
    color: lime;
  }
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

  // console.log(navState);
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

  return (
    <MainPageWrapper>
      <FixedContainer borderColor={scrolled ? 'rgba(150, 150, 150, 0.2)' : 'white'}>
        <div className={`menu-container ${navState}`} onClick={handleClick}>
          {navState === 'deactive' ? (
            <FontAwesomeIcon className="menu" icon={faBars} size="2x" />
          ) : (
            <FontAwesomeIcon className="menu" icon={faTimes} size="2x" />
          )}
        </div>
        <div className={`header-container ${navState}`}>
          <AnchorLink onClick={handleClick} href="#about">
            About
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#skills">
            Skills
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#projects">
            Project
          </AnchorLink>
          <a
            href="https://extreme-cork-bd1.notion.site/KJ-Ha-dc0ac56756d34e2d956028c4a80cec78"
            target="_blank"
            rel="noopener noreferrer">
            CV
          </a>
        </div>
      </FixedContainer>
      <section id="about">
        <div className="space" />
        <About />
      </section>
      <section id="skills">
        <div className="space" />
        <Skills />
      </section>
      <section id="projects">
        <div className="space" />
        <Projects />
      </section>
    </MainPageWrapper>
  );
}

export default MainPage;
