import { useEventListener } from '../../hooks'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { Col, MasonryDiv } from './styles'


const fillCols = (children: any, cols: any) => {
    children?.forEach((child: any, i: number) => cols[i % cols.length].push(child))
}

interface IMasonryProps {
    children: ReactNode
    gap?: string
    minWidth?: number
}
export function Masonry({ children, gap, minWidth = 500, ...rest }: IMasonryProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [numCols, setNumCols] = useState(3)
    const cols = [...Array(numCols)].map(() => [])
    fillCols(children, cols)
    const resizeHandler = () => {
        const width = ref.current?.clientWidth
        if (width) {
            setNumCols(Math.ceil(width / minWidth))
        }
    }
    useEffect(resizeHandler, [])
    useEventListener(`resize`, resizeHandler)
    return (
        <MasonryDiv ref={ref} gap={gap} {...rest}>
            {[...Array(numCols)].map((_, index) => (
                <Col key={index} gap={gap}>
                    {cols[index]}
                </Col>
            ))}
        </MasonryDiv>
    )
}

