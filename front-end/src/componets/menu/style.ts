import styled from 'styled-components'
import { Cor, Fonte } from '../../uteis/styleGlobal'

export const Container = styled.div`
  min-width: 280px;
  height: 60px;

  background: ${Cor.themegradiente};
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
    color: ${Cor.branco};
    padding: 10px;
  }

  a:hover {
    background-color: rgba(5, 5, 5, 0.2);
    border-radius: 8px;
  }

  @media (min-width: 80px) and (max-width: 760px) {
    min-width: 292px;
    section {
      width: 292px;
      display: flex;
      max-width: 296px;
    }
    a {
      font-family: ${Fonte.roboto500};
      font-size: 14px;
      font-style: bold;
      text-decoration: none;
      color: ${Cor.branco};
      padding: 10px;
    }
    min-width: 280px;
  }
`
