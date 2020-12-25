import styled from "styled-components"
import React from 'react'


const NavsWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction: ${props => props.direction} ;
`

export const Navs = (props) => {

    const children = props.children.map((child, index) => {
        return React.cloneElement(child, {
            as: "a",
            key: index,
            color: child.props.selected ? "primary" : "light",
        })
    })

    return (
        <NavsWrapper>
            {children}
        </NavsWrapper>
    )
}
