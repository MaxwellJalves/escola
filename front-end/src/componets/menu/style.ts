import styled from 'styled-components'
import { Cor } from '../../uteis/styleGlobal'

export const Container = styled.div`
  max-width: 100vw;
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
    padding: 20px;
  }

  a:hover {
    background-color: rgba(5, 5, 5, 0.2);
    padding: 20px;
    border-radius: 8px;
  }
`
