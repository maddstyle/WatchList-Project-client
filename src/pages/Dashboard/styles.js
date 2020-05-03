import styled from 'styled-components'
/**
 * @sfc creates states functional
 * @cc creates class component
 * @backticks after html tag
 */

export const Container = styled.div`
  display: flex;
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      align-self: center;
      color: #333;
      margin-top: 5px;
    }
    > span {
      align-self: center;
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    div {
      margin-top: 5px;
      display: flex;
      justify-content: space-evenly;
      button {
        border: none;
      }
      a {
        color: #000000;
      }
    }
  }
`
