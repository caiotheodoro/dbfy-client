import { Masonry } from '../../components/Masonry'
import { MasonryComponent } from './components/Masonary'
import { CarouselContainer, CarouselItem, CategoriesContainer, TestsContainer } from './styles'

const data = [
  [`5em`, `linear-gradient(45deg, #f05f70, #164b78)`],
  [`2em`, `linear-gradient(45deg, #5cb767, #2e9fff)`],
  [`4em`, `linear-gradient(45deg, #e0c3fc, #8ec5fc)`],
  [`7em`, `linear-gradient(45deg, #f093fb, #f5576c)`],
  [`1em`, `linear-gradient(45deg, #ffd34f, #2e9fff)`],
  [`3em`, `linear-gradient(45deg, #d299c2, #fef9d7)`],
  [`2em`, `linear-gradient(45deg, #f6d365, #fda085)`],
  [`5em`, `linear-gradient(45deg, #164b78, #ffd34f)`],
  [`5em`, `linear-gradient(45deg, #96fbc4, #f9f586)`],
]


export function Tests() {

  const divs = data.concat(data)

  return (
    <TestsContainer>
      <CategoriesContainer>
        <h1>
          Categories
        </h1>
        <CarouselContainer>
          <CarouselItem>
          </CarouselItem>
          <CarouselItem>
          </CarouselItem>
          <CarouselItem>
          </CarouselItem>
          <CarouselItem>
          </CarouselItem>
          <CarouselItem>
          </CarouselItem>
          <CarouselItem>
          </CarouselItem>
          <CarouselItem>
          </CarouselItem>
        </CarouselContainer>
        <MasonryComponent />
      </CategoriesContainer>
    </TestsContainer>
  )
}
