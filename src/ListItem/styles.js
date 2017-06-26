import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'
import Flex from 'Flexbox'

export const ItemStyle = styled(Flex)`
  font-family: ${font('primary')};
  font-size: ${size('fontSize')};
  position: relative;
  text-align: left;

  & > div:first-child {
    margin-right: 15px;
  }

  & a {
    cursor: pointer;
    color: ${palette(1)};
  }

  &.odd {
    background-color: ${palette('grayscale', 2)};
  }
`

export const LogoStyle = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;
  padding: 5px;
  border: 1px solid;
  border-color: ${palette('grayscale', 2)};
  border-radius: ${size('radius')};
  box-shadow: ${p => p.theme.shadow};
  box-sizing: border-box;

  & > div {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`

export const TitleSubtitleStyle = styled.div`
  margin-bottom: 8px;

  & > div:first-child {
    font-size: 18px;
  }
`

export const DatesStyle = styled(Flex)`
  line-height: 20px;
  margin-bottom: -4px;
  color: ${palette('grayscale', 0)};

  & i {
    font-size: 26px;
    margin: 0 6px
  }
`

export const MarkdownStyle = styled.div`
  color: ${palette('grayscale', 0)};
  line-height: 22px;
  font-size: 14px;

  p {
    margin-bottom: 15px;
  }
  blockquote {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 10px;
    border-left: 4px solid #E5E5E5;
  }
  ul {
    margin: 0px;
    padding: 0 20px;
    li {
      margin-bottom: 0.0rem;
    }
  }
  code {
    margin: 0;
    padding: 2px 4px;
    white-space: pre-wrap;
    background-color: #FAFAFA;
    border: 1px solid #E5E5E5;
    border-radius: 2px;
  }

  & .ListItem-readmore {
    border: 1px solid #CCC;
    padding: 2px 14px;
    border-radius: ${size('radius')};
    margin: 10px 0px;
    display: inline-block;
  }
`
