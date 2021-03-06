import CardContato from '../componets/card-contato/CardContato'
import Menu from '../componets/menu/Menu'
import Mock from '../mock/Contato.json'
import * as I from '../types'

let retorno: I.IListaDeContatos = Mock

const Contato = () => {
  return (
    <>
      <Menu />
      {retorno.contatos.map(m => (
        <CardContato tipo={m} />
      ))}
    </>
  )
}

export default Contato
