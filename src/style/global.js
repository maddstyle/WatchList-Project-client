import { createGlobalStyle } from 'styled-components'
import rolex_movement from '../assets/rolex_movement.svg'
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
    background: #F5F5F5;
    /* background : #F0F0F5 url(${rolex_movement}) 70% top; */
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

`
