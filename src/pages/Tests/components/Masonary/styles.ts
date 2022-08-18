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


  img {
    object-fit: none;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    border-radius: 1em;
    object-position: top;
    filter: grayscale(2%) contrast(1.1) brightness(1.0) blur(0.6px) opacity(0.9);
  }
`