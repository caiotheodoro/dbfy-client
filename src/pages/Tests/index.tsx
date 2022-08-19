import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import { Masonry } from '../../components/Masonry'
import { MasonryComponent } from './components/Masonary'
import { CarouselContainer, CarouselItem, CategoriesContainer, TestsContainer } from './styles'



export function Tests() {

  const randomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return (`#${color.length === 5 ? color + '0' : color}`)
  };

  // event listenet to scroll on drag CarouselItem
  const handleScroll = (direction: string) => {
    const scroll = document.getElementById('carousel')
    if (scroll) {
      let scrollCompleted = 0;
      var slideVar = setInterval(function () {
        if (direction === 'left') {
          scroll.scrollLeft += 20;
        } else {
          scroll.scrollLeft -= 20;
        }
        scrollCompleted += 10;
        if (scrollCompleted >= 300) {
          window.clearInterval(slideVar);
        }
      }, 10);
    }
  }


  return (
    <TestsContainer>
      <CategoriesContainer>
        <h1>
          Categories
        </h1>
        <CarouselContainer
          id='carousel'
        >
          <ArrowCircleLeft size={40} weight="fill" onClick={() => handleScroll("right")} className="left" />
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} color1={randomColor()} color2={randomColor()} />
          ))}
        </CarouselContainer>
        <ArrowCircleRight size={40} weight="fill" onClick={() => handleScroll("left")} className="right" />
        <MasonryComponent />
      </CategoriesContainer>
    </TestsContainer>
  )
}
