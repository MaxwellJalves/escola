import styled from 'styled-components'
import * as S from '../../uteis/styleGlobal'

export const Container = styled.div`
  * {
    margin: 0px;
    padding: 0px;
  }
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 2px;
  max-width: 1190px;
  object-fit: cover;
  margin: auto;
  height: auto;

  li {
    margin: 0px;
    list-style: none;
    text-decoration: none;
  }
  @media ${S.MediaQuery.mobile_80x768} {
    padding: 24px 24px;
    min-width: 254px;
  }
`

export const ConteinerFilho = styled.img`
  object-fit: unset;
  border-radius: 12px;
  width: 100%;
  height: auto;

  background: ${S.Cor.themegradienteCinza};

  @media ${S.MediaQuery.mobile_80x768} {
    object-fit: cover;
    padding: 24px 24px;
    min-width: 254px;
    height: calc(- 80px);
  }
`
