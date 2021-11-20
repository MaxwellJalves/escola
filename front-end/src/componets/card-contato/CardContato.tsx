//definir o tipo do componente

import * as I from '../../types'
import * as S from './style'
type usuario = {
  contatos: I.IUsuario
}

const CardContato = (us: usuario) => {
  const { contatos } = us
  let { id, nome } = contatos.usuario

  return (
    <S.Container>
      <S.Titulo>Contato</S.Titulo>
      <span>
        <p>{id}</p>
        <p>{nome}</p>
      </span>
    </S.Container>
  )
}

export default CardContato
