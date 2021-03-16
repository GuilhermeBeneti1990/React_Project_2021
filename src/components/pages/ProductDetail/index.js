import React from 'react'

import Hero from 'components/molecules/Hero'
import HeroImg from 'assets/cover.jpg'
import Heading from 'components/atoms/Heading'
import Section from 'components/atoms/Section'
import Button from 'components/atoms/Button'
import Footer from 'components/organisms/Footer'
import {
  Callout,
  CalloutBody,
  CalloutMedia,
  CalloutActions
} from '../../organisms/Callout'
import { PinnedList, PinnedItem } from 'components/atoms/PinnedTag'
import RegisterImg from 'draws/Register'
import Breadcrumb from 'components/atoms/Breadcrumb'

import { FaIdCard, FaHome, FaScroll } from 'react-icons/fa'
import ProductType from 'models/types/ProductType'

const ProductDetail = ({ product }) => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <Breadcrumb
        items={[
          { label: 'Início', link: '/' },
          { label: 'Produto' },
          { label: product.title }
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
        viverra lacus, sit amet pharetra dui tincidunt eu. Praesent faucibus sed
        nisl eget sollicitudin. Pellentesque vitae laoreet dui, sit amet mollis
        neque. Quisque bibendum vel felis non dignissim. Aliquam erat volutpat.
        Cras accumsan, urna vel venenatis feugiat, est leo aliquet orci, aliquam
        aliquam nunc purus eget lectus. Vivamus et fermentum felis. Praesent
        pharetra venenatis mi nec scelerisque.
      </p>
      <h5>Requisitos desse produto:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard /> Requisito 01
        </PinnedItem>
        <PinnedItem>
          <FaIdCard /> Requisito 02
        </PinnedItem>
        <PinnedItem>
          <FaScroll /> Requisito 03
        </PinnedItem>
        <PinnedItem>
          <FaHome /> Requisito 04
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Fabricante</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
            egestas mauris, in finibus mauris. Etiam vitae tortor eget dui
            sodales molestie. Donec lacinia mattis enim ut molestie. Phasellus
            dictum imperdiet neque eget vulputate.
          </p>
          <CalloutActions>
            <Button color="primary">Entre em contato</Button>
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

ProductDetail.defaultProps = {
  product: {}
}

ProductDetail.propTypes = {
  product: ProductType
}

export default ProductDetail
