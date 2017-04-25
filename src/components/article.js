import React from 'react'
import styled from 'styled-components'

import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { MT } from  './styled/titles'
import { P } from  './styled/typographies'


export default class Article extends React.Component {
  constructor() {
    super()
  }

  render() {

    const Box = styled.div`
       border: 1px solid #fff;
       margin: 3% 3%;
       padding: 3%;
       background: rgba(255, 255, 255, .2);
       &:hover {
         background: ${ props => props.theme.hoverColor };
         box-shadow: 5px 5px 10px #aaa;
         cursor: pointer;
       }
    `
    return (
        <Box>
          <MT> { this.props.postTitle } </MT>
          <P> { this.props.postExcerpt } </P>
        </Box>
    )
  }
}
