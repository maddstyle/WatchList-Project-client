import { createGlobalStyle } from "styled-components";
/**
 *  @star * selects everything!
 */

export default createGlobalStyle`
  *{
    marging: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;

  }
  body{
    background: #F0f0F5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 16px sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button:{
    cursor: pointer;
  }

`;
