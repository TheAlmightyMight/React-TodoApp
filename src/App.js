import { DataProvider } from './context';
import React,{useState} from 'react'
import Board from './components/board';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from './global';
import { darkTheme,lightTheme } from './global';

const AppContainer = styled.div`
width:1440px;
min-height:720px;
font-size:inherit;
display:flex;
justify-content:center;
position:relative;
`

const Background = styled.header`
width:100%;
height:250px;
position:absolute;
top:0;
`

const Img = styled.div`
object-fit:cover;
width:100%;
height:100%;
background-repeat:no-repeat;
background-position:center center;
`

const ContentWrapper = styled.div`
width:520px;
min-height:280px;
z-index:15;
`

const Content = styled.div`
margin-top:50px;
display:flex;
justify-content:space-between;
`

const Title = styled.h1`
color: hsl(0, 0%, 98%);
`

const ThemeToggle = styled.button`
width:32px;
aspect-ratio:1;
border:none;
background-color:transparent;
background-repeat:no-repeat;
background-position:center;
cursor:pointer;
`

const Footer = styled.footer`
position:absolute;
bottom:0;
font-size:18px;
font-weight:700;
margin-bottom:15px;
`

function App() {
  let [theme,setTheme] = useState("light");
  
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
      <DataProvider>
        <ThemeProvider theme={theme === "light" ? darkTheme: lightTheme}>
        <GlobalStyle/>
        <AppContainer>
        <Background>
        <Img className="bg-img"/>
        </Background>
        <ContentWrapper>
          <Content>
            <Title>TODO</Title>
            <ThemeToggle className="theme-toggle" onClick={themeToggler}/>
          </Content>
          <Board/>
        </ContentWrapper>
        <Footer>Klimenty 2022</Footer>
        </AppContainer>
        </ThemeProvider>
      </DataProvider>
  );
}

export default App;
