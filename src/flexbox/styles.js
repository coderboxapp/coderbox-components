import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  justify-content: ${p => p.justifyContent || 'flex-start'};
  align-items: ${p => p.alignItems || 'flex-start'};

  & > div {
    margin-left: 0;
    margin-right: 0;
  }
`
