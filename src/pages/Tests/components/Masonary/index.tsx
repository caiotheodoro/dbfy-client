import { Masonry } from '../../../../components/Masonry'
import { ColorBox } from './styles'

const data = [
    [`20em`, `linear-gradient(45deg, #f05f70, #164b78)`],
    [`12em`, `linear-gradient(45deg, #5cb767, #2e9fff)`],
    [`20em`, `linear-gradient(45deg, #e0c3fc, #8ec5fc)`],
    [`19em`, `linear-gradient(45deg, #f093fb, #f5576c)`],
    [`20em`, `linear-gradient(45deg, #164b78, #ffd34f)`],
]
export function MasonryComponent() {
    return (
        <Masonry minWidth={600} >
            {data.map(([minHeight, background], index) => (
                <ColorBox
                    key={index}
                    style={{ background, minHeight }}
                >
                    {index + 1}
                </ColorBox>
            ))}
        </Masonry>
    )
}