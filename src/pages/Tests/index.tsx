import { Masonry } from '../../components/Masonry'
import { MasonryComponent } from './components/Masonary'
import { CarouselContainer, CarouselItem, CategoriesContainer, TestsContainer } from './styles'



export function Tests() {

  const randomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return (`#${color.length === 5 ? color + '0' : color}`)
  };

  return (
    <TestsContainer>
      <CategoriesContainer>
        <h1>
          Categories
        </h1>
        <CarouselContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} color1={randomColor()} color2={randomColor()} />
          ))}
        </CarouselContainer>
        <MasonryComponent />
      </CategoriesContainer>
    </TestsContainer>
  )
}
