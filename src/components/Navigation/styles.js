import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dddddd;
  padding: 10px;
  margin-bottom: 30px;
  > aside {
    font-family: 'Luckiest Guy', cursive;
    font-style: italic;
    font-size: 5vh;
    text-shadow: 3px 3px 3px black;
    margin-right: 50px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  a {
    margin: 10px;
  }
`
// export const Container = styled.div`
/* display: flex;

  justify-content: space-evenly;
  align-items: center;

  background: rgb(192, 192, 192);
  color: white;

  height: 10vh; */

/* .logo {
    font-family: 'Luckiest Guy', cursive;
    font-style: italic;
    font-size: 5vh;
    text-shadow: 3px 3px 3px black;
  } */

/*/
  .nav.links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;

    list-style: none;
  }

  .link {
    color: forestgreen;
    font-size: 2,5vh;
    text-decoration: none;
  } */
// `
