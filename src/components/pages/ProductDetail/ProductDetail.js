import React from 'react'
import PropTypes from 'prop-types'

import Hero from 'components/molecules/Hero/Hero'
import HeroImg from 'assets/cover.jpg'
import Heading from 'components/atoms/Heading/Heading'
import Section from 'components/atoms/Section/Section'
import Button from 'components/atoms/Button/Button'
import Footer from 'components/organisms/Footer/Footer'
import {
  Callout,
  CalloutBody,
  CalloutMedia,
  CalloutActions
} from '../../organisms/Callout/Callout'
import { PinnedList, PinnedItem } from 'components/atoms/PinnedTag/PinnedTag'
import RegisterImg from 'draws/Register'

import { FaIdCard, FaHome, FaScroll } from 'react-icons/fa'

const ProductDetail = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Nome do produto</h1>
      </Heading>
    </Hero>
    <Section>
      <p>Descrição do produto</p>
      <p>Justificativa do produto</p>
      <p>Vantagem do produto</p>
      <h5>Requisitos:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard /> RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard /> CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll /> Certidão de Nascimento
        </PinnedItem>
        <PinnedItem>
          <FaHome /> Comprovante de Residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Título Callout</h6>
          <p>Descrição do Callout</p>
          <CalloutActions>
            <Button color="primary">Inscrever-se</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <RegisterImg />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
)

ProductDetail.defaultProps = {}

ProductDetail.propTypes = {}

export default ProductDetail
