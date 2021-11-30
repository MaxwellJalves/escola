import './stylecss.css'

import * as data from '../../mock/Imagens.json'

const Galeria = () => {
  return (
    <div className='container'>
      {data.imagens.map(({ id }) => (
        <input type='radio' name='slide' id={'slide' + id} />
      ))}
      <div className='content'>
        <div className='slides'>
          {data.imagens.map(({ id, url, descricao }) => (
            <div className={'slide s' + id}>
              <img src={url} key={id} alt={descricao} />
            </div>
          ))}
        </div>
      </div>
      <div className='navigation'>
        {data.imagens.map(({ id }) => (
          <label htmlFor={'slide' + id}> {id} </label>
        ))}
      </div>
    </div>
  )
}

export default Galeria
