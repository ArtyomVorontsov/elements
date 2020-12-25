import React from 'react'
import styled from "styled-components"
import { Card } from '../Card/Card.jsx'
import { listGroupColors } from './ListGroupColors.js'


export const ListGroupLi = styled.div`
    ${props => props.isLast ? "border-bottom: none;" : "border-bottom: solid 1px rgb(200,200,200);" } 
    width: 100%;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;

    &:hover{
        background-color: rgb(245,245,245) ;
    }

    ${props => props.selected && props.color ?  listGroupColors[props.color] + "color:white;": null}
    
    
`


export const ListGroup = (props) => {

    const children = props.children.map((child, index) => {
            return React.cloneElement(child, {
                isLast: props.children.length - 1 === index ? true : false
            })
    } )

    debugger
    return (
       <Card>
           {children}
       </Card>
    )
}
