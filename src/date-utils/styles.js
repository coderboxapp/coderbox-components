import styled from 'styled-components'
import Flex from '../flexbox'

export const Icon = styled.i`
  margin: 0px 10px
`

export const DateRangeContainer = styled.div`
  font-size: 14px;
  
  & select {
    border: 1px solid ${p => p.theme.borderColors.base};
    border-radius: 4px;
    padding: 4px 8px;
  }
`

export const DatePickerContainer = styled(Flex)`
  & select:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & select:last-child {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`
