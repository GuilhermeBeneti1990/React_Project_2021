import React from 'react'
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
import Breadcrumb from 'components/atoms/Breadcrumb/Breadcrumb'

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
      <Breadcrumb
        items={[
          { label: 'Início', link: '/' },
          { label: 'Sobre', link: '/about' }
        ]}
      />
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Ut at massa lorem. Phasellus molestie nunc ac sapien vehicula,
            porttitor congue justo hendrerit. Donec venenatis sed lectus
            accumsan pretium. Mauris arcu metus, ultrices vel congue sed,
            porttitor eu dolor. Donec lobortis ut augue eu aliquet. Proin
            malesuada pellentesque erat, in luctus diam luctus eget. Suspendisse
            at aliquet velit. Sed quis ante non turpis tincidunt facilisis. In
            eros sapien, hendrerit in condimentum sit amet, pulvinar vel erat.
            Aliquam commodo suscipit velit at tristique.
          </p>
          <ul>
            <li>Empresa Inovadora</li>
            <li>Focada nas pessoas</li>
            <li>Eficiência no que faz</li>
            <li>Melhor rendimento do mundo</li>
          </ul>
        </div>
        <div>
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

export default About
