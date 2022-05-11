import { createGlobalStyle } from "styled-components";
import img1 from "./images/bg-desktop-dark.jpg";
import img2 from "./images/bg-desktop-light.jpg";
import toggleLight from "./images/icon-sun.svg";
import toggleDark from "./images/icon-moon.svg";

export const darkTheme = {
body: "hsl(234, 39%, 85%)",
bg:"hsl(235, 21%, 11%)",
formbg:"hsl(235, 24%, 19%)",
img: img1,
hover:"hsl(236, 33%, 92%)",
toggleImg:toggleDark,
}

export const lightTheme = {
body:"hsl(235, 19%, 35%)",
bg:"hsl(236, 33%, 92%)",
formbg:"hsl(236, 33%, 92%)",
img: img2,
hover:"hsl(235, 19%, 35%)",
toggleImg:toggleLight,
}
// hsl(234, 11%, 52%)
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    height:100%;
}

body{
    font-family: 'Josefin Sans', sans-serif;
    font-size:18px;
    height:100%;
    color:${props => props.theme.body};
    background-color:${props => props.theme.bg};
}

#root{
    display:flex;
    justify-content:center;
    align-items:center;
}

.form{
    background-color:${props => props.theme.formbg};
}

.form-input{
    background-color:${props => props.theme.formbg};
}

.list{
    background-color:${props => props.theme.formbg};
}

.bg-img{
    background-image:url(${props => props.theme.img});
}

.filter-btn:hover{
    color:${props => props.theme.hover};
}

.filter-btn:first-of-type{
    color:hsl(220, 98%, 61%);     
}

.theme-toggle{
    background-image:url(${props => props.theme.toggleImg})
}
`

export default GlobalStyle;