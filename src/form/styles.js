import styled from 'styled-components'

export const FormStyle = styled.div`
  margin: auto;
  text-align: left;

  & .Form-buttons {
    padding: 5px 0px;
  }

  & button {
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

export const FormItemStyle = styled.div`
  padding: 5px 0px;

  & label {
    font-weight: 600;
    margin-bottom: 5px;
  }

  & textarea,
  & input[type="text"],
  & input[type="number"],
  & input[type="password"],
  & input[type="email"] {
    width: 100%;
    box-sizing: border-box;
    font-family: ${p => p.theme.fontFamily};
    font-size: 14px;
    border: 1px solid ${p => p.theme.borderColors.base};
    border-radius: 4px;
    padding: 8px 8px;
    outline: none;
  }

  & textarea {
    padding: 12px 12px;
  }
`
