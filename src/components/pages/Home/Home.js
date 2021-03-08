import React from 'react'
// import PropTypes from 'prop-types'
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa'

import Hero from 'components/molecules/Hero/Hero'
import Heading from 'components/atoms/Heading/Heading'
import Button from 'components/atoms/Button/Button'
import HeroImg from 'assets/cover.jpg'
import Feature from 'components/atoms/Feature/Feature'
import Grid from 'components/atoms/Grid/Grid'
import Section from 'components/atoms/Section/Section'
import ProductGrid from 'components/organisms/ProductGrid/ProductGrid'
import Accordion from 'components/molecules/Accordion/Accordion'
import AccordionGroup from 'components/molecules/Accordion/AccordionGroup/AccordionGroup'

import Video from 'assets/video.mp4'
import Food1 from 'assets/food_01.jpg'
import Food2 from 'assets/food_02.jpg'
import Food3 from 'assets/food_03.jpg'
import Food4 from 'assets/food_04.jpg'
import Food5 from 'assets/food_05.jpg'
import Food6 from 'assets/food_06.jpg'
import Footer from 'components/organisms/Footer/Footer'

const products = [
  {
    id: 1,
    title: 'Produto/Serviço 01',
    description: 'Descrição desse produto ou serviço',
    image: Food1
  },
  {
    id: 2,
    title: 'Produto/Serviço 02',
    description: 'Descrição desse produto ou serviço',
    image: Food2
  },
  {
    id: 3,
    title: 'Produto/Serviço 03',
    description: 'Descrição desse produto ou serviço',
    image: Food3
  },
  {
    id: 4,
    title: 'Produto/Serviço 04',
    description: 'Descrição desse produto ou serviço',
    image: Food4
  },
  {
    id: 5,
    title: 'Produto/Serviço 05',
    description: 'Descrição desse produto ou serviço',
    image: Food5
  },
  {
    id: 6,
    title: 'Produto/Serviço 06',
    description: 'Descrição desse produto ou serviço',
    image: Food6
  }
]

const Home = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Título da Aplicação</h1>
      </Heading>
      <ul>
        <li>Vantagem 01</li>
        <li>Vantagem 02</li>
        <li>Vantagem 03</li>
      </ul>
      <Button color="primary" variant="outlined">
        Contratar
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Feature 01">
          <p>Descrição detalhada da vantagem n•1</p>
        </Feature>
        <Feature icon={<FaKey />} title="Feature 02">
          <p>Descrição detalhada da vantagem n•1</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Feature 03">
          <p>Descrição detalhada da vantagem n•1</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Feature 04">
          <p>Descrição detalhada da vantagem n•1</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Detalhe do projeto teste</h2>
          </Heading>
          <p>Descrição mais detalhada do projeto teste</p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={Video} width="100%" autoPlay loop muted />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas Frequentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Dúvida 01">Descrição da primeira dúvida</Accordion>
        <Accordion title="Dúvida 02">Descrição da segunda dúvida</Accordion>
        <Accordion title="Dúvida 03">Descrição da terceira dúvida</Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
)

// Home.defaultProps = {}

// Home.propTypes = {}

export default Home