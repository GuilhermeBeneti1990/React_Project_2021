import React from 'react'
import { Root, IconContainer, FooterLink } from './Footer.styles'
import {
  FaPhone,
  FaBuilding,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa'

import Container from 'components/atoms/Container'
import Grid from 'components/atoms/Grid'
import Heading from 'components/atoms/Heading'

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Projeto Teste</h6>
          </Heading>
          <p>
            Somos uma empresa líder no mercado em que atuamos, conheça-nos e
            aprenda muito mais.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (14) 91111-2222
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Entre em contato conosco, estamos á disposição!
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank">
              <IconContainer>
                <FaFacebook />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              LinkedIn
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
)

export default Footer
