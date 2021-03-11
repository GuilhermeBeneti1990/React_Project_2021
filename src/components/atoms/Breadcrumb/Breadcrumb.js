import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Root, Item } from './Breadcrumb.styles'

const Breadcrumb = ({ items }) => (
  <Root>
    {items.map((item) => (
      <Item key={item.label} as={item.link && Link} to={item.link}>
        {item.label}
      </Item>
    ))}
  </Root>
)

Breadcrumb.defaultProps = {
  items: []
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string
    })
  )
}

export default Breadcrumb
