import { useState } from 'react'
import { ContainerSlideIndormativo } from './style'

const SlideInformativo = () => {
  const [contador, setContador] = useState(0)

  return (
    <>
      <ContainerSlideIndormativo>
        <p>você clicou {contador}</p>
      </ContainerSlideIndormativo>
      <button onClick={() => setContador(contador + 1)}>Next</button>
    </>
  )
}

export default SlideInformativo
