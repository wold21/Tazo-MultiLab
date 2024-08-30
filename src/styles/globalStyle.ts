import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, ol, ul, li, form, label{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
body{
    font-family: 'Noto Sans KR', sans-serif;
}
ol, ul{
    list-style: none;
}
button {
    border: 0;
    background: transparent;
    cursor: pointer;
}
`;
