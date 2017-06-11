import styled from 'styled-components'
import Flex from '../flexbox'

export const ContainerStyle = styled.div`
  position: relative;
`

export const ItemStyle = styled(Flex)`
  position: relative;

  & > div:first-child {
    margin-right: 15px;
  }

  & a {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
  }
`

export const FormStyle = styled.div`
  background-color: #F7F7F7;
`

export const LogoStyle = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;
  padding: 5px;
  border: 1px solid ${p => p.theme.borderColors.base};
  box-shadow: ${p => p.theme.shadow};
  border-radius: 5px;
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
    font-size: 19px;
  }
`

export const DatesStyle = styled(Flex)`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: -4px;
  color: ${p => p.theme.colors.gray};

  & i {
    font-size: 26px;
    margin: 0 6px
  }
`

export const ToolbarStyle = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #888;

  & i {
    margin: 0px 5px;
    cursor: pointer;
  }
  
  & i:hover {
    color: ${p => p.theme.colors.primary};
  }
`

export const MarkdownStyle = styled.div`
  color: ${p => p.theme.colors.gray};
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
    li {
      margin-bottom: 0.0rem;
    }
  }
  code {
    margin: 0;
    padding: 5px;
    white-space: pre-wrap;
    background-color: #FAFAFA;
    border: 1px solid #E5E5E5;
    border-radius: 2px;
  }
`

export const SpinnerStyle = styled.div`
  position: relative;
  margin: 0px 5px;
  & label {
    margin-right: 10px;
  }
`
