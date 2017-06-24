import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme'

const req = require.context('../src', true, /\.stories\.js$/)
const Theme = story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>

addDecorator(Theme)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
