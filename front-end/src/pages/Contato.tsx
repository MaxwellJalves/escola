import Menu from "../componets/menu/Menu";
import Mock from "../mock/Contato.json";
import * as I from "../types";

let retorno: I.IListaDeContatos = Mock;
let [usuario] = retorno.contatos;
const Contato = () => {
  console.log(retorno);
  console.log(
    ` Valor obtido : ${usuario.usuario.id} , ${usuario.usuario.nome}}`
  );

  return (
    <>
      <Menu />
      <p>Contato</p>
      {}
    </>
  );
};

export default Contato;
