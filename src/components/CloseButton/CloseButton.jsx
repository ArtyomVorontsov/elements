import styled, { css } from "styled-components";
import closeButtonBlack from "./assets/cancelBlack.svg"
import React from 'react'


export const StyledCloseButton = styled.button`
   border: none;
   background-color: transparent;
   margin: 7px;

   img{
       filter: opacity(50%)
    };
   
   &:hover{
       cursor: pointer;
        img{
           filter: none;
        }
   }
`

export const CloseButton = (props) => {
    return (
        <StyledCloseButton {...props} className={"button"}>
            <img width={20} src={closeButtonBlack} alt=""/>
        </StyledCloseButton>
    )
}





