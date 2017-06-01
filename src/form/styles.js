import styled from 'styled-components'

export const FormStyle = styled.div`
  margin: auto;
  text-align: left;

  & .react-form-buttons {
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

  & select,
  & textarea,
  & input[type="text"],
  & input[type="number"],
  & input[type="email"],
  & input[type="email"] {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgb(218, 218, 218);
    border-radius: 4px;
    padding: 8px 8px;
    outline: none;
  }
`
