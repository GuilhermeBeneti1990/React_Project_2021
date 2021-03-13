import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
import Footer from 'components/organisms/Footer/Footer'

import ProductType from 'models/types/ProductType'

const Home = ({ products }) => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Título da Aplicação</h1>
      </Heading>
      <ul>
        <li>Mais comodidade para seu dia-a-dia</li>
        <li>Torne-se um proifissional valorizado no mercado</li>
        <li>Re-escreva sua história todos os dias</li>
      </ul>
      <Button color="primary" variant="outlined">
        Assinar
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Feature 01">
          <p>Descrição da feature n•1</p>
        </Feature>
        <Feature icon={<FaKey />} title="Feature 02">
          <p>Descrição da feature n•2</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Feature 03">
          <p>Descrição da feature n•3</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Feature 04">
          <p>Descrição da feature n•4</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos produtos</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Quem somos?</h2>
          </Heading>
          <p>Breve descrição da empresa</p>
          <div>
            <Button as={Link} to="/about" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video src={Video} width="100%" autoPlay playsInline loop muted />
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

Home.defautProps = {
  products: []
}

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType)
}

export default Home
