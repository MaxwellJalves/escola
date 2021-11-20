import CardContato from '../componets/card-contato/CardContato'
import Menu from '../componets/menu/Menu'
import Mock from '../mock/Contato.json'
import * as I from '../types'

let retorno: I.IListaDeContatos = Mock
let [usuario] = retorno.contatos

const Contato = () => {
  return (
    <>
      <Menu />
      <CardContato contatos={usuario} />
    </>
  )
}

export default Contato
