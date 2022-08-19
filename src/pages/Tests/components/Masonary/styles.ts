import styled from "styled-components";

export const ColorBox = styled.div`
  border-radius: 1em;
  transition: 0.2s;
  place-content: center;
  display: grid;
  color: white;
  position: relative;
  cursor: pointer;
  
  :hover {
    transform: scale(1.05);
    div {
      display: block;

    }

    img {
    filter: blur(2px);

    }

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

  div {
    position: absolute;
    z-index: 10;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h2 {
    font-family: "Baloo 2", cursive;
    font-size: 3.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme["white"]};
    text-shadow: 0 0 5px black;
  }
`