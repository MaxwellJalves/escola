import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  min-width: 280px;
  height: 100px;
  border: 1px solid rebeccapurple;
  border-radius: 3px;
  padding: 0px 24px;
  display: flex;
  align-items: center;

  justify-content: end;
  section {
    width: 600px;
    display: flex;
    justify-content: space-between;
  }
  a {
    font-family: Tahoma;
    font-size: 24px;
    font-style: normal;
    text-decoration: none;
    color: rebeccapurple;
    padding: 20px;
  }

  a:hover {
    background-color: rgba(5, 5, 5, 0.2);
    padding: 20px;
    border-radius: 8px;
  }
`;
