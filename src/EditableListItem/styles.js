import styled from 'styled-components'
import { palette } from 'styled-theme'

export const EditableItemStyle = styled.div`
  position: relative;
`

export const ToolbarStyle = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #888;
  min-width: 100px;
  text-align: right;

  & i {
    margin: 0px 5px;
    cursor: pointer;
  }
  
  & i:hover {
    color: ${palette(1)};
  }
`

export const SpinnerStyle = styled.div`
  position: relative;
  margin: 0px 5px;
  & label {
    margin-right: 10px;
  }
`
