import React from 'react'
// import PropTypes from 'prop-types'
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa'

import Hero from 'components/molecules/Hero/Hero'
import Heading from 'components/atoms/Heading/Heading'
import Button from 'components/atoms/Button/Button'
import HeroImg from '../../assets/cover.jpg'
import Feature from 'components/atoms/Feature/Feature'
import Grid from 'components/atoms/Grid/Grid'
import Section from 'components/atoms/Section/Section'
import ProductGrid from 'components/organisms/ProductGrid/ProductGrid'
import Accordion from 'components/molecules/Accordion/Accordion'
import AccordionGroup from 'components/molecules/Accordion/AccordionGroup/AccordionGroup'

import Video from 'assets/video.mp4'
import Image from 'assets/underground.jpg'
import Footer from 'components/organisms/Footer/Footer'

const products = [
  {
    id: 1,
    title: 'Card Title',
    description: 'description test description test description test',
    image: Image
  },
  {
    id: 2,
    title: 'Card Title',
    description: 'description test description test description test',
    image: Image
  },
  {
    id: 3,
    title: 'Card Title',
    description: 'description test description test description test',
    image: Image
  },
  {
    id: 4,
    title: 'Card Title',
    description: 'description test description test description test',
    image: Image
  },
  {
    id: 5,
    title: 'Card Title',
    description: 'description test description test description test',
    image: Image
  },
  {
    id: 6,
    title: 'Card Title',
    description: 'description test description test description test',
    image: Image
  }
]

const Home = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Title</h1>
      </Heading>
      <ul>
        <li>Item 01</li>
        <li>Item 02</li>
        <li>Item 03</li>
      </ul>
      <Button color="primary" variant="outlined">
        Botão
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="test 01">
          <p>
            Feature Test Feature Test Feature Test Feature Test Feature Test
            Feature Test Feature Test Feature Test
          </p>
        </Feature>
        <Feature icon={<FaKey />} title="test 02">
          <p>
            Feature Test Feature Test Feature Test Feature Test Feature Test
            Feature Test Feature Test Feature Test
          </p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="test 03">
          <p>
            Feature Test Feature Test Feature Test Feature Test Feature Test
            Feature Test Feature Test Feature Test
          </p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="test 04">
          <p>
            Feature Test Feature Test Feature Test Feature Test Feature Test
            Feature Test Feature Test Feature Test
          </p>
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
            <h2>Projeto Teste</h2>
          </Heading>
          <p>Projeto teste teste teste teste teste teste teste teste</p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={Video} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas Frequentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Accordion 01">Accordion 01 01 01 01 01</Accordion>
        <Accordion title="Accordion 02">Accordion 02 02 02 02 02</Accordion>
        <Accordion title="Accordion 03">Accordion 03 03 03 03 03</Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
)

// Home.defaultProps = {}

// Home.propTypes = {}

export default Home
