
import { Container } from './style'
import * as T from '../../types'

type TpGaleria = {
  imagem : T.IGaleria
}
const Galeria = (props: TpGaleria) => {
  const [{id,descricao,url}] = props.imagem.imagens

  return <>

    <Container>
      {console.log(`retorno ${id} ${descricao} ${url}`)}

      <img key={id} src={url} alt={descricao} />


    </Container>

  </>
}

export default Galeria
