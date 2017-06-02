import styled, { keyframes } from 'styled-components'
import { toPx, parseColor } from '../utils'

export const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${p => p.hide ? 'none' : 'flex'};
  z-index: 999;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
`

const scale = keyframes`
  0%, 80%, 100% { transform: scale(0.0) }
  40% { transform: scale(1.0) }
`

export const Spinner = styled.div`
  position: relative;
  width: ${p => toPx(p.size) || '50px'};
  height: ${p => toPx(p.size) || '50px'};
  margin-bottom: 10px;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  & > div::before {
    background-color: ${p => parseColor(p.color, p.theme.colors)};
    content: '';
    display: block;
    margin: 0 auto;
    width: 20%;
    height: 20%;
    border-radius: 100%;
    animation: ${scale} 1.2s infinite ease-in-out;
    animation-fill-mode: both;
  }

  & > div:nth-child(2) { transform: rotate(30deg); }
  & > div:nth-child(3) { transform: rotate(60deg); }
  & > div:nth-child(4) { transform: rotate(90deg); }
  & > div:nth-child(5) { transform: rotate(120deg); }
  & > div:nth-child(6) { transform: rotate(150deg); }
  & > div:nth-child(7) { transform: rotate(180deg); }
  & > div:nth-child(8) { transform: rotate(210deg); }
  & > div:nth-child(9) { transform: rotate(240deg); }
  & > div:nth-child(10) { transform: rotate(270deg); }
  & > div:nth-child(11) { transform: rotate(300deg); }
  & > div:nth-child(12) { transform: rotate(330deg); }

  & > div:nth-child(2)::before { animation-delay: -1.1s; }
  & > div:nth-child(3)::before { animation-delay: -1.0s; }
  & > div:nth-child(4)::before { animation-delay: -0.9s; }
  & > div:nth-child(5)::before { animation-delay: -0.8s; }
  & > div:nth-child(6)::before { animation-delay: -0.7s; }
  & > div:nth-child(7)::before { animation-delay: -0.6s; }
  & > div:nth-child(8)::before { animation-delay: -0.5s; }
  & > div:nth-child(9)::before { animation-delay: -0.4s; }
  & > div:nth-child(10)::before { animation-delay: -0.3s; }
  & > div:nth-child(11)::before { animation-delay: -0.2s; }
  & > div:nth-child(12)::before { animation-delay: -0.1s; }
`
