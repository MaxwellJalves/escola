import styled from 'styled-components'
import { Cor, Fonte } from '../../uteis/styleGlobal'

const FonteParagrafo = `  font-size: 20px;
font-weight: 500;
font-style: normal;
font-family: Tahoma;`
export const Titulo = styled.h1`
  font-size: 39;
  font-family: ${Fonte.roboto500};
  display: flex;
`

export const Container = styled.div`
  margin: 24px auto;
  height: 20vh;
  width: 90vh;

  border-radius: 12px;

  padding: 2px 4px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row: repeat(3, 1fr);

  color: ${Cor.branco};
  @media (min-width: 80px) and (max-width: 760px) {
    width: 84vw;
    grid-template-columns: repeat(1, 1fr);
    grid-row: repeat(1, 250px);
  }

  background: ${Cor.themegradiente};
`

export const TextoContato = styled.span`
  display: flex;
  justify-content: flex-start;
  ${FonteParagrafo}
`
