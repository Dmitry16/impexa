import React from 'react'
import styled from 'styled-components'
import { media } from './styled/medias'
import { H1, H3, Icon, P } from './styled/typographies'

class Footer extends React.Component {

  render() {
    const WrapperLinks = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 0 0 2%; padding: 0;
      > ul { list-style-type: none;
              font-size: 0.7rem;
              width: 15em;
              text-align: center;
              margin:1%; padding:0;
              > li > h3 {color:khaki; font-weight:100}
            }
    `
    const Footer = styled.footer`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: ${ props => props.theme.footerBG };
      padding:1.5em 1.618em;
      width:100%
      border: 2px solid #fff;
      > div > p { font-size: 1em }
    `
    const ImgFooter = styled.img`
      width: 50px;
    `
    return (
      <Footer className="footer" role="contentinfo">

          <div>
            <ImgFooter src='./assets/img/logo2.png'></ImgFooter>
          </div>

          <WrapperLinks>
            <ul>
              <li><h3>Contenido</h3></li>
              <li><a href="javascript:void(0)">Inicio</a></li>
              <li><a href="javascript:void(0)">Contacto</a></li>
              <li><a href="javascript:void(0)">Fotos</a></li>
            </ul>
            <ul>
              <li><h3>Sigue nos</h3></li>
              <li><a href="javascript:void(0)">Facebook</a></li>
              <li><a href="javascript:void(0)">Twitter</a></li>
              <li><a href="javascript:void(0)">YouTube</a></li>
            </ul>
            <ul>
              <li><h3>Aviso Legal</h3></li>
              <li><a href="javascript:void(0)">Terminos y condiciones</a></li>
              <li><a href="javascript:void(0)">Politica de privacidad</a></li>
            </ul>
          </WrapperLinks>

          <hr />
          <p style={{fontSize:'0.7rem'}}>Copyrite 2017</p>
    </Footer>
  );
  }
}
export default Footer;
