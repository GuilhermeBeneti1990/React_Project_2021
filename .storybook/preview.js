import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import GlobalStyle from '../src/styles/GlobalStyle'
import ThemeProvider, { ThemeNames } from '../src/ThemeProvider/ThemeProvider'
import { select } from '@storybook/addon-knobs'
import { MemoryRouter as Router } from 'react-router-dom'

addDecorator((storyFn) => (
  <Router>
    <ThemeProvider theme={select('Theme', ThemeNames, ThemeNames.light)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </Router>
))

const viewports = {
  extraSamll: {
    name: 'Portrait phone (default)',
    styles: {
      width: '360px',
      height: '640px'
    }
  },
  small: {
    name: 'Landscape (sm)',
    styles: {
      width: '640px',
      height: '340px'
    }
  },
  medium: {
    name: 'Tablet (md)',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  large: {
    name: 'Desktop (lg)',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  extraLarge: {
    name: 'Large Desktop (xl)',
    styles: {
      width: '1280px',
      height: '800px'
    }
  }
}

addParameters({
  viewport: {
    viewports
  }
})
