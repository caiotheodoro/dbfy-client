import styled from 'styled-components'

export const TestsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;


  
`

export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    
    svg {
        position: absolute;
        
        top: 190px;
        cursor: pointer;
        transform: translateY(-50%);
        z-index: 10;
    }
    .left {
        left: -10px;
    }
    .right {
        right: -20px;
    }
    `

export const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    overflow-x: auto;

    ::-webkit-scrollbar {
        display: none;
    }

   

`

interface ICarouselItemProps {
    color: string
}

export const CarouselItem = styled.div<ICarouselItemProps>`
    min-width: 150px;
    margin: 0.5rem;
    display: flex;
    min-height: 200px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background-color: white;
    
    h3 {
        font-size: 2rem;
        font-family: 'Baloo 2', cursive;
    }

    /* img {
        width: 100%;
        border-radius: 5px;
    } */
 
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }

    background-color:${props => props.color};
`

