import styled from 'styled-components'
import { Cor } from '../../uteis/styleGlobal'

export const ContainerSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Cor.turqueza};
  font-size: 55px;

  min-width: 720px;
  min-height: 500px;
  margin: 24px 160px;
  border-radius: 4px;

  background: ${Cor.themegradienteCinza};

  @media (min-width: 80px) and (max-width: 760px) {
    min-width: 280px;
    min-height: 300px;
    margin: 24px 24px;
  }
`

export const ContainerSlideIndormativo = styled(ContainerSlide)`
  min-height: 300px;
  background: ${Cor.themegradiente};
  color: ${Cor.branco};
`
