import Navbar from './components/Navbar';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Main from './components/Main';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #625b70;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`
const Div=styled.div`
  margin:1rem 0.5rem;
  background-color:white;
  height:calc(100vh - 2rem);
`

function App() {
  return (

    <Div>
      <GlobalStyle />
      <Navbar />
      <Main />
    </Div>
  );
}

export default App;
