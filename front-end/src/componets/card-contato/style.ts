import styled from 'styled-components'
import { Cor, Fonte } from '../../uteis/styleGlobal'

const FonteParagrafo = `  font-size: 20px;
font-weight: 500;
font-style: normal;
font-family: Tahoma;`
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
<<<<<<< HEAD
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
=======
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
>>>>>>> development
  }

  background: ${Cor.themegradiente};
`

export const TextoContato = styled.span`
  display: flex;
<<<<<<< HEAD
  justify-content: flex-start;
  ${FonteParagrafo}
=======
  color: white;
  justify-content: start;

  height: 20px;
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-family: Tahoma;
>>>>>>> development
`
