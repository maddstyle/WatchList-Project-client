import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: rgb(192,192,192);
  color: white;

  height: 10vh;

  .logo {
    font-family: 'Luckiest Guy', cursive;
    font-style: italic;
    font-size: 5vh;
    text-shadow: 3px 3px 3px black;
  }

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
  }
`;
