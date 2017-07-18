import styled from 'styled-components'

export const EditableItemStyle = styled.div`
  position: relative;
`

export const ToolbarStyle = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  color: #888;
  min-width: 100px;
  text-align: right;

  & i {
    margin: 0px 5px;
    cursor: pointer;
  }
  
  & i:hover {
    opacity: 0.8;
  }
`

export const SpinnerStyle = styled.div`
  position: relative;
  margin: 0px 5px;
  & label {
    margin-right: 10px;
  }
`
