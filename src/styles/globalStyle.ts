import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'LaundryGothic';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/TTLaundryGothicB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Suit';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, ol, ul, li, form, label{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  body{
    font-family: LaundryGothic, 'Noto Sans KR', sans-serif;
    overflow-x: hidden;
    height: 100vh;
  }
  ol, ul{
    list-style: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #343434;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #222222;
  }
  ::-webkit-scrollbar-track {
    background-color: #222222;
  }
  #root {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
`;
