import React from 'react'
import Feature from './Feature'
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa'
import Grid from '../Grid/Grid'

export default {
  title: 'Atoms/Feature',
  component: Feature
}

export const usage = () => (
  <Feature icon={<FaCar />} title="test">
    <p>
      Feature Test Feature Test Feature Test Feature Test Feature Test Feature
      Test Feature Test Feature Test
    </p>
  </Feature>
)

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar />} title="test 01">
      <p>
        Feature Test Feature Test Feature Test Feature Test Feature Test Feature
        Test Feature Test Feature Test
      </p>
    </Feature>
    <Feature icon={<FaKey />} title="test 02">
      <p>
        Feature Test Feature Test Feature Test Feature Test Feature Test Feature
        Test Feature Test Feature Test
      </p>
    </Feature>
    <Feature icon={<FaMapMarkedAlt />} title="test 03">
      <p>
        Feature Test Feature Test Feature Test Feature Test Feature Test Feature
        Test Feature Test Feature Test
      </p>
    </Feature>
    <Feature icon={<FaAccessibleIcon />} title="test 04">
      <p>
        Feature Test Feature Test Feature Test Feature Test Feature Test Feature
        Test Feature Test Feature Test
      </p>
    </Feature>
  </Grid>
)
