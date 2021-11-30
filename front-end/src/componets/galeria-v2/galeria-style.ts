import styled from 'styled-components'

const cores = {
  corbgc: '#34495E',
  cortc: '#496684',
  cinza_escuro: '#7F8C8D',
  cinza_escuro_rgb: 'rgb(149, 165, 166)',
  laranja_carot: 'rgb(230, 126, 34)',
}

export const ContainerGaleria = styled.div`
  #sair {
    display: none;
  }
  * {
    margin: 0;
    padding: 0px;
  }

  width: 72vw;
  height: 556px;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;

  button {
    width: 100%;
  }
`
export const ImagemCentral = styled.div`
  border-radius: 12px;
  width: 644px;
  height: 456px;
  max-width: 944px;
  background-size: cover;
  overflow: hidden;
`

export const ImgSlide = styled.img`
  width: 644px;
  height: 456px;
  background-size: contain;

  :fullscreen {
    width: 880px;
  }
`

export const ImgSlideMini = styled.img`
  src: ${props => (props.src ? props.src : props.src)};
  width: 180px;
  height: 90px;
  object-fit: cover;
  align-self: center;
`

export const Seta = styled.span`
  display: flex;
  border: 1px solid white;
  border-radius: 50px;

  img {
    border-radius: 50px;
    display: flex;
    color: white;
    width: 21px;
    height: 40px;

    padding: 20px;
  }

  img:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const Zoom = styled.span`
  margin-top: 60px;
  width: 100px;
  height: 18px;
  justify-self: center;
  border-radius: 12px;

  margin-left: calc(72vw / 2);

  padding: 30px;
  border: 1px solid ${cores.cinza_escuro_rgb};
  font-family: 'Zen Kaku Gothic Antique, sans-serif';
  color: ${cores.cinza_escuro_rgb};

  background-color: white;
`
export const Exit = styled(Zoom)`
  height: 20px;
  width: 20px;
  background-color: red;
`

export const SegundoContainer = styled.div`
  margin-top: 60px;
  width: 320px;
  height: 556px;
  border: 1px solid ${cores.cinza_escuro_rgb};
`
