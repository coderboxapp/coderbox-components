import styled from 'styled-components'

export const FormStyle = styled.div`
  margin: auto;
  text-align: left;

  & .Form-buttons {
    padding: 5px 0px;
  }

  & .Form-buttons a {
    margin-right: 5px;
  }

  & label.error {
    display: inline-block;
    font-size: 11px;
    font-weight: 400;
    color: red;
    margin: 5px 5px 5px 5px;
  }
`
