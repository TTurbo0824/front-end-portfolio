import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MainPageWrapper = styled.div`
  .main {
    /* min-height: calc(100vh - 10.9rem); */
  }
  .menu-container {
    &.active {
      display: none;
    }
    &.deactive {
      display: flex;
    }
  }
  .header-container {
    &.active {
      display: flex;
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
    color: black;
  }
  a:hover {
    color: purple;
  }
`;

function MainPage () {
  const [navState, setNavState] = useState('active');

  useEffect(() => window.addEventListener('resize', maintainNavState));

  useEffect(() => {
    if (window.innerWidth < 768) setNavState('deactive');
  }, []);

  // console.log(navState);
  const handleClick = () => {
    if (navState === 'active') setNavState('active');
    else if (navState === 'deactive') setNavState('close');
    // else setNavState('deactive');
  };

  const maintainNavState = () => {
    if (window.innerWidth >= 768) {
      if (navState === 'active') setNavState('active');
    } else setNavState('deactive');
  };

  return (
    <MainPageWrapper>
      <div className='main'>
        <div className={`menu-container ${navState}`} onClick={handleClick}>
          {navState === 'deactive'
            ? (
              <FontAwesomeIcon className='menu' icon={faBars} size='2x' />
              )
            : (
              <FontAwesomeIcon className='menu' icon={faTimes} size='2x' />
              )}
        </div>
        <div className={`header-container ${navState}`}>
          <AnchorLink onClick={handleClick} href='#about'>About</AnchorLink>
          <AnchorLink onClick={handleClick} href='#skills'>Skills</AnchorLink>
          <AnchorLink onClick={handleClick} href='#projects'>Project</AnchorLink>
        </div>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='projects'>
          <Projects />
        </section>
      </div>
    </MainPageWrapper>
  );
}

export default MainPage;
