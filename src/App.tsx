import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import styled from 'styled-components';
import { Colors } from './components/utils/_var';

const AppWrapper = styled.div`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .App {
    background-color: ${Colors.backgroundColor};
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <div className="App">
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </div>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
