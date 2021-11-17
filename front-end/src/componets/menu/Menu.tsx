import { Link } from "react-router-dom";
import { Container } from "./style";

const Menu = () => {
  return (
    <>
      <Container>
        <section>
          <Link to="/">Home</Link>
          <Link to="/informativo">Informações</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </section>
      </Container>
    </>
  );
};

export default Menu;
