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

export const CarouselItem = styled.div`
    min-width: 150px;
    margin: 0.5rem;
    display: flex;
    min-height: 200px;
    justify-content: center;
    align-items: center;
    background-color: white;
    
    /* img {
        width: 100%;
        border-radius: 5px;
    } */
 
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`

