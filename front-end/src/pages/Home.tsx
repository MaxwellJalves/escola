import Menu from '../componets/menu/Menu'
import SlideInformativo from '../componets/slide/SlideInformativo'
import Slide from '../componets/slide/SlidePrincipal'
import { Cor } from '../uteis/styleGlobal'

const Home = () => {
  return (
    <>
      <Menu />
      <Slide />
      <hr style={{ border: '0.1px solid' + Cor.cinza, margin: '24px 160px' }} />
      <SlideInformativo />
    </>
  )
}

export default Home
