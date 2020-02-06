import { createGlobalStyle } from 'styled-components';

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100% !important;
    max-height: 100% !important;
  }
  body {
    overflow: auto;
    -webkit-font-smoothing: antialiased !important;
    
  }

  #app {
    margin: 0 90px;
    padding: 60px 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }


  @media (max-width: 412px) {
    #app {
      flex-direction: column;
      margin: 0;
    }
  }


  body, input, button {
        font: 14px Roboto, sans-serif;
    }

    button {
    cursor: pointer;
  }
`;