import styled from "styled-components";

export const ColorBox = styled.div`
  border-radius: 1em;
  transition: 0.2s;
  place-content: center;
  display: grid;
  color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px 0 var(--color-shadow);
  }
`