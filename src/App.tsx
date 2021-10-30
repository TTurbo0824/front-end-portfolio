import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import styled from 'styled-components';

const AppWrapper = styled.div`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .App {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App () {
  return (
    <BrowserRouter>
      <AppWrapper>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/about' component={About} />
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
          </Switch>
        </div>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
