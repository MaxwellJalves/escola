import styled from 'styled-components'
import { Cor, Fonte } from '../../uteis/styleGlobal'

export const Titulo = styled.h1`
  font-size: 39;
  font-family: ${Fonte.thin100};
  color: ${Cor.branco};
  display: flex;
  @media (min-width: 280px) and (max-width: 1220px) {
    font-size: 28px;
    font-size: 500;
    justify-content: center;
  }
`

export const Container = styled.div`
  background: ${Cor.themegradiente};
  border-radius: 12px;

  margin: 24px 160px;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 250px 200px 250px;
  align-items: center;

  @media (min-width: 280px) and (max-width: 1220px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    margin: 24px 24px;
    padding-bottom: 20px;
    align-items: center;
  }
`

export const TextoContato = styled.span`
  display: flex;
  color: white;
  justify-content: start;

  height: 20px;
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-family: Tahoma;
`
