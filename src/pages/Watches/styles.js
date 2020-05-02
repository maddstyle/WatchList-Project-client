import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    padding: 15px;
    border-radius: 4px;
    border: 0;
    + input {
      margin-top: 8px;
    }
  }
`;
