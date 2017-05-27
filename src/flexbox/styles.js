import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};
`
