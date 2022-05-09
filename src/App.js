import './css/App.css';
import { DataProvider } from './context';
import List from './components/list';
import Board from './components/board';
import styled from 'styled-components';
import image from './images/bg-desktop-light.jpg';

const AppContainer = styled.div`
width:1440px;
height:100vh;
display:flex;
justify-content:center;
position:relative;
background-color:hsl(236, 33%, 92%);
`

const Header = styled.header`
width:100%;
height:250px;
position:absolute;
top:0;
`

const Img = styled.div`
object-fit:cover;
width:100%;
height:100%;
background-image:url(${image});
background-repeat:no-repeat;
background-position:center center;
`

function App() {
  return (
      <DataProvider>
        <AppContainer>
        <Header><Img></Img></Header>
        <Board/>
        </AppContainer>
      </DataProvider>
  );
}

export default App;
