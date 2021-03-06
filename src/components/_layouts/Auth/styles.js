import styled from 'styled-components'
import { shade } from 'polished'

export const Wrapper = styled.div`
  margin-top: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: forestgreen;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 10px;
      &:hover {
        background: ${shade(0.2, '#228B22')};
      }
    }
  }
  a {
    margin-top: 15px;
  }
`
