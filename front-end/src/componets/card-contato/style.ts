import styled from 'styled-components'
import { Cor, Fonte } from '../../uteis/styleGlobal'

export const Titulo = styled.h1`
  font-size: 39;
  font-family: ${Fonte.roboto500};
  display: flex;
`

export const Container = styled.div`
  width: 100%;
  margin: auto;
  max-width: 660px;
  min-height: 300px;
  background: ${Cor.themegradiente};
  margin: 10px 80px;
  font-family: Tahoma;
  flex-wrap: wrap;
  padding: 10px 25px;
  gap: 4px;
  color: ${Cor.branco};
  border-radius: 12px;
  div {
    margin-bottom: 10px;

    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      display: flex;
      height: auto;
      flex-direction: column;
      margin-bottom: 10px;
    }
  }
`

export const TextoContato = styled.span`
  display: flex;

  justify-content: space-around;
  border: 1px solid white;
  width: 400px;
  height: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-family: Tahoma;
  border-radius: 12px;
`
