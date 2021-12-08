import Atividade from '../../uteis/atividades'
import { ContainerPrincipal } from './styled'
import up from '../../assets/images/arrow-up.svg'
import down from '../../assets/images/arrow-down.svg'
import { useEffect, useState } from 'react'

const CardInfo = () => {
  const [state, setState] = useState<boolean | number>()

  const eventoCard = (index: boolean | number) => {
    if (state === index) {
      return setState(!index)
    }
    setState(index)
  }

  const atividade = Atividade
  useEffect(() => {
    console.log(`verificando stado inicial ${state}`)
  })
  return (
    <>
      {atividade.map((item, index) => {
        return (
          <ContainerPrincipal key={atividade.indexOf(item)}>
            {
              <>
                <span>
                  <img
                    src={
                      state === true && atividade.indexOf(item) === index
                        ? up
                        : down
                    }
                    alt=''
                    onClick={() => eventoCard(index)}
                  />
                </span>
                <h2>{item.titulo}</h2>
                <p>{item.descricao}</p>
                {console.log(`validacao index ${index}`)}
              </>
            }
          </ContainerPrincipal>
        )
      })}
    </>
  )
}
export default CardInfo
