import { reversePalette } from 'styled-theme/composer'

const theme = {
  fontFamily: 'Open Sans',
  colors: {
    base: '#F3F3F3',
    primary: '#1B8CEB',
    primaryLight: '#CDE6FB',
    success: '#72CF89',
    gray: '#888888'
  },
  textColors: {
    base: '#000000',
    primary: '#FFFFFF',
    success: '#FFFFFF'
  },
  borderColors: {
    base: '#d8d8d8',
    primary: '#106CB9',
    success: '#3BAB57'
  },
  shadow: '0px 0px 1px rgba(0, 0, 1, 0.12)',
  overlay: 'rgba(255, 255, 255, 0.4)',
  borderRadius: '5px'
}

theme.palette = {
  grayscale: ['#888888', '#CCCCCC', '#D8D8D8', '#F3F3F3', '#FFFFFF'],
  primary: ['#106CB9', '#1B8CEB', '#65B3E3', '#82C3ED', '#CDE6FB'],
  success: ['#388E3C', '#4CAF50', '#7CC47F', '#9FD4A1', '#C8E6C9'],
  danger: ['#c2185b', '#E91E63', '#F06292', '#F48CAF', '#F8BBD0'],
  white: ['#FFF', '#FFF']
}

theme.fonts = {
  primary: 'Open Sans, Arial, sans-serif'
}

theme.sizes = {
  maxWidth: '1200px',
  fontSize: '14px',
  fontSizeSmall: '12px',
  iconSize: '24px',
  radius: '4px'
}

export default theme
