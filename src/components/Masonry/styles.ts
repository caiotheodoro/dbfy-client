import styled from 'styled-components'

interface MasonryProps {
    gap?: string
}

export const MasonryDiv = styled.div<MasonryProps>`
  display: grid;
  width: 100%;
  margin: 2em 0;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap || `1em`};
`
export const Col = styled.div<MasonryProps>`
  display: grid;
  grid-gap: ${props => props.gap || `1em`};
`

