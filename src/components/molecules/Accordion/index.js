import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Root, Head, Body } from './Accordion.styles.js'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

const Accordion = ({ title, children, open: pOpen, onChange }) => {
  const [sOpen, setOpen] = useState(false)
  const isControlled = pOpen !== undefined
  const open = isControlled ? pOpen : sOpen

  const handleClick = () => {
    const newState = !open
    if (isControlled) {
      setOpen(newState)
    }
    onChange(newState)
  }

  return (
    <Root open={open}>
      <Head role="button" onClick={handleClick}>
        <h6>{title}</h6>
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {open && <Body>{children}</Body>}
    </Root>
  )
}

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
  open: undefined,
  onChange: () => {}
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func
}

export default Accordion
