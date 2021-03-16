import React from 'react'
import Breadcrumb from '.'

export default {
  title: 'Components/Atoms/Breadcrumb',
  component: Breadcrumb
}

const items = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' }
]

export const usage = () => <Breadcrumb items={items} />
