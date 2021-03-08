import React from 'react'
import PropTypes from 'prop-types'
import { ImageContainer } from './About.styles'

import Hero from 'components/molecules/Hero/Hero'
import Heading from 'components/atoms/Heading/Heading'
import HeroImg from 'assets/cover.jpg'
import Section from 'components/atoms/Section/Section'
import Grid from 'components/atoms/Grid/Grid'
import AboutImg from 'draws/About'
import Footer from 'components/organisms/Footer/Footer'
import Card, {
  CardMedia,
  CardMediaDescription
} from 'components/molecules/Card/Card'

import ProfImg01 from 'assets/teachers/prof_01.jpg'
import ProfImg02 from 'assets/teachers/prof_02.jpg'
import ProfImg03 from 'assets/teachers/prof_03.jpg'
import ProfImg04 from 'assets/teachers/prof_04.jpg'
import ProfImg05 from 'assets/teachers/prof_05.jpg'
import ProfImg06 from 'assets/teachers/prof_06.jpg'

const teachers = [
  {
    id: 1,
    name: 'Thor',
    avatar: ProfImg01
  },
  {
    id: 2,
    name: 'Loki',
    avatar: ProfImg02
  },
  {
    id: 3,
    name: 'Tony',
    avatar: ProfImg03
  },
  {
    id: 4,
    name: 'Ted',
    avatar: ProfImg04
  },
  {
    id: 5,
    name: 'Lucky',
    avatar: ProfImg05
  },
  {
    id: 6,
    name: 'Arnold',
    avatar: ProfImg06
  }
]

const About = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Página de Sobre</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>Texto da página de sobre</p>
          <p>Texto da página de sobre</p>
          <p>Texto da página de sobre</p>
          <ul>
            <li>Item - Sobre 01</li>
            <li>Item - Sobre 02</li>
            <li>Item - Sobre 03</li>
            <li>Item - Sobre 04</li>
            <li>Item - Sobre 05</li>
          </ul>
        </div>
        <div>
          <p>Texto da página sobre referente a imagem abaixo</p>
          <center>
            <ImageContainer>
              <AboutImg />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={3}>
        <div>
          <Heading>
            <h4>Missão</h4>
          </Heading>
          <p>Missão da empresa</p>
        </div>
        <div>
          <Heading>
            <h4>Visão</h4>
          </Heading>
          <p>Visão da empresa</p>
        </div>
        <div>
          <Heading>
            <h4>Valores</h4>
          </Heading>
          <p>Valores da empresa</p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos profissionais</h2>
      </Heading>
      <Grid sm={2} md={3} lg={4}>
        {teachers.map((teacher) => (
          <Card key={teacher.id}>
            <CardMedia image={teacher.avatar}>
              <CardMediaDescription>
                <h5>{teacher.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
)

About.defaultProps = {}

About.propTypes = {}

export default About
