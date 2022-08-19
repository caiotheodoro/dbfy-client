import { Masonry } from '../../../../components/Masonry'
import { ColorBox } from './styles'

const data = [
    [`10em`, `linear-gradient(45deg, #164b78, #ffd34f)`, 'img1.png', 'Roupas'],
    // [`12em`, `linear-gradient(45deg, #5cb767, #2e9fff)`, 'img3.png'],
    [`15em`, `linear-gradient(45deg, #d9a7c7, #ffd34f)`, 'img4.png', 'Comida'],
    [`18em`, `linear-gradient(45deg, #e0c3fc, #8ec5fc)`, 'img5.png', 'Arte'],
    // [`18em`, `linear-gradient(45deg, #f05f70, #164b78)`, 'img2.png'],
    [`19em`, `linear-gradient(45deg, #f093fb, #f5576c)`, 'img2.png', 'Filmes'],
]
export function MasonryComponent() {
    return (
        <Masonry minWidth={600} >
            {data.map(([minHeight, background, src, category], index) => (
                <ColorBox
                    key={index}
                    style={{ background, minHeight }}
                >
                    <div>
                        <h2>{category}</h2>
                    </div>
                    <img src={`./categories/${src}`} alt="img" />
                </ColorBox>
            ))}
        </Masonry>
    )
}