//definir o tipo do componente

import * as I from '../../types'
import * as S from './style'
type usuario = {
  contatos: I.IUsuario
}

const CardContato = (us: usuario) => {
  const { contatos } = us
  let { id, nome, contato } = contatos.usuario

  return (
    <S.Container>
      <S.Titulo>Contato</S.Titulo>
      <div>
        <S.TextoContato> Código: {id}</S.TextoContato>
        <S.TextoContato>
          {' '}
          Nome: {nome.charAt(0).toUpperCase() + nome.substr(1)}
        </S.TextoContato>
      </div>
      <span>
        <ul>
          <li>
            <S.TextoContato>Telefone : {contato?.telefone}</S.TextoContato>
          </li>
          <li>
            <S.TextoContato>Whatsapp : {contato?.whatsapp}</S.TextoContato>
          </li>
          <li>
            <S.TextoContato>E-mail : {contato?.email}</S.TextoContato>
          </li>
        </ul>
      </span>
    </S.Container>
  )
}

export default CardContato
