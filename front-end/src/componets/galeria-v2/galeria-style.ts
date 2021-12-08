import styled from 'styled-components'

const responsivo = {
  mobile: ' (min-width: 280px) and (max-width: 768px)',
}

const cores = {
  corbgc: '#34495E',
  cortc: '#496684',
  cinza_escuro: '#7F8C8D',
  cinza_escuro_rgb: 'rgb(149, 165, 166)',
  laranja_carot: 'rgb(230, 126, 34)',
}

export const GridColumn = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${responsivo.mobile} {
    max-width: 320px;
    margin: 24px 24px;
    width: calc(100vw -148px);
    height: auto;
  }
`

export const ContainerGaleria = styled.div`
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

  @media ${responsivo.mobile} {
    max-width: 320px;
    width: 100vw;
    max-height: 280px;
  }
`
export const ImagemCentral = styled.div`
  border-radius: 12px;
  width: 644px;
  height: 456px;
  max-width: 944px;

  overflow: hidden;

  :fullscreen {
    background-color: red;
  }
  @media ${responsivo.mobile} {
    display: flex;
    margin-left: -24px;
    margin-right: -24px;
    width: 320px;
    height: calc(100vh - 38px);
  }
`

export const ImgSlide = styled.img`
  width: 644px;
  height: 456px;

  @media screen and (max-width: 1440px) {
    width: 100%;
    heigth: 80vh;
  }
  @media ${responsivo.mobile} {
    max-width: 320px;

    width: 100%;
    object-fit: contain;
    height: auto;
    border-radius: 12px;

    border: 1px;
    padding: 0px;
    margin: 0px;
  }
`

export const ImgSlideMini = styled.img`
  src: ${props => (props.src ? props.src : props.src)};
  width: 180px;
  height: 90px;
  gap: 2px;
  object-fit: cover;
  align-self: center;
  cursor: pointer;
  :hover {
    background: rgba(0, 122, 0, 0.5);
  }
`

export const Seta = styled.span`
  border: 1px solid white;
  border-radius: 50px;
  cursor: pointer;
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
  @media ${responsivo.mobile} {
    display: flex;
    position: relative;

    img {
      flex: 1;
      padding: 0px;
      margin: 0px;
      border: none;
    }
  }
`

export const Zoom = styled.span`
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  max-width: 120px;
  height: 18px;

  border-radius: 12px;

  padding: 30px;
  border: 1px solid ${cores.cinza_escuro_rgb};
  font-family: 'Zen Kaku Gothic Antique, sans-serif';
  color: ${cores.cinza_escuro_rgb};

  background-color: white;

  @media ${responsivo.mobile} {
    padding: 10px 50px;
    align-self: left;
    width: auto;
    border: 1px solid linear-gradient(red, orange);
  }
`
export const Exit = styled.button`
  display: none;

  :fullscreen {
    padding: 25px;
    margin-right: 150px;
    align-self: flex-end;
    display: flex;
    font-size: 30px;
    font-weight: 600;
    border: none;
    background: transparent;
    color: white;
    :hover {
      border-radius: 45px;
      background: rgba(80, 10, 90, 0.9);
    }
  }
  @media screen and (display-mode: fullscreen), (device-width: fullscreen) {
    padding: 25px;
    margin-right: 150px;
    align-self: flex-end;
    display: flex;
    font-size: 30px;
    font-weight: 600;
    border: none;
    background: transparent;
    color: white;
  }
  :hover {
    border-radius: 45px;
    background: rgba(80, 10, 90, 0.9);
  }
`

export const SegundoContainer = styled.div`
  margin-top: 60px;
  width: 320px;
  height: 556px;
  border: 1px solid ${cores.cinza_escuro_rgb};
`

export const ContainerDivImgMini = styled.div`
  display: flex;
  gap: 5px;
  @media ${responsivo.mobile} {
    height: 120px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    width: 290px;
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      touch-action: cross-slide-x;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to right, orange, red, blueviolet);
      touch-action: cross-slide-x;
      border-radius: 10px;
      width: 10px;
    }
  }
`
