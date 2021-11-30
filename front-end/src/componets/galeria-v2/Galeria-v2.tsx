import './stylecss.css'

import * as data from '../../mock/Imagens.json'
import {
  ContainerGaleria,
  Exit,
  ImagemCentral,
  ImgSlide,
  Seta,
  Zoom,
} from './galeria-style'
import LEFT from '../../assets/images/arrow-left.svg'
import RIGHT from '../../assets/images/arrow-right.svg'
import ZOOM from '../../assets/images/zoom.svg'

import { useState } from 'react'

const GaleriaV2 = () => {
  let [index, setIndex] = useState<number>(0)
  let quantidade_maxima = data.imagens.length

  const telaCheia = () => {
    let galeria = document.querySelector('#galeria-id')
    galeria?.requestFullscreen()
  }
  /** PENDENTE Verificar o erro de type para todos os navegadores */
  const fecharTelaCheia = () => {
    let galeria = document.querySelector('#galeria-id')
    galeria?.requestFullscreen.call(galeria)
  }

  const imagemAnterior = (posicao: number) => {
    if (posicao < 0 || posicao === 0 || posicao === undefined) {
      return setIndex(0)
    }
    if (posicao > 0) {
      return setIndex(index - 1)
    }
  }
  const proximaImagem = (posicao: number) => {
    if (posicao > quantidade_maxima - 1 || posicao === undefined) {
      return setIndex(quantidade_maxima - 1)
    }
    if (posicao < quantidade_maxima - 1) {
      return setIndex(index + 1)
    }
  }
  const exibirImagem = (posicao: string) => {
    switch (posicao) {
      case 'esquerda':
        return imagemAnterior(index)
      case 'direita':
        return proximaImagem(index)
      default:
        throw Error('Opção invalida')
    }
  }

  return (
    <>
      <ContainerGaleria id='galeria-id'>
        <Exit id='sair' onClick={() => fecharTelaCheia()} />
        <Seta
          className='seta'
          onClick={() => {
            exibirImagem('esquerda')
          }}>
          <img src={LEFT} alt='esquerda' />
        </Seta>
        <ImagemCentral>
          <ImgSlide src={data.imagens[index].url} />
        </ImagemCentral>
        <Seta className='seta' onClick={() => exibirImagem('direita')}>
          <img src={RIGHT} alt='direita' />
        </Seta>
      </ContainerGaleria>
      <Zoom onClick={() => telaCheia()}>
        <img src={ZOOM} alt='' /> zoom
      </Zoom>
    </>
  )
}

export default GaleriaV2
