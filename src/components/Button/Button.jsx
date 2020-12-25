import styled, { css } from "styled-components"
import { buttonColors, buttonSizes } from "./ButtonColors.js"

//Tn = tiny
//Sm = small
//Md = medium
//Lg = large
//Xl = very large

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    border: none;
    ${props => inGroupHandler(props.inGroup, props.positionInGroup, props.isLast)}
    ${props => buttonSizes[props.size]}
    transition: background-color 0.3s ease;
    font-weight: 500 ;
    margin: 5px;
    ${props => buttonColors[props.color]};
`



const inGroupHandler = (inGroup, positionInGroup, isLast) => {
    if (inGroup && isLast) return `border-radius: 0 5px 5px 0;`
    if (inGroup && positionInGroup === 0) return `border-radius: 5px 0 0 5px;`   
    if (!inGroup) return `border-radius: 5px;`   
}



