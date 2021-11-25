import Galeria from "../componets/galeria/Galeria";
import Menu from "../componets/menu/Menu";
import * as Docs from '../mock/Imagens.json'

const Informativo = () => {
  let api = Docs.imagens
  return (
    <>
      {" "}
      <Menu />
      <p>Informativo</p>


    </>
  );
};

export default Informativo;
