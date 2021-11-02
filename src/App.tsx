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
    <AppWrapper>
      <div className="App">
        <MainPage />
      </div>
      <Footer />
    </AppWrapper>
  );
}

export default App;
