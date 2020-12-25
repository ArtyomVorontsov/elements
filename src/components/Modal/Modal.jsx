import React, { useState } from 'react'
import ReactDOM from "react-dom"
import { Card } from '../Card/Card.jsx';
import styled, { keyframes } from "styled-components"
import { CardBody } from '../Card/CardBody.jsx';
import { CardHeader } from '../Card/CardHeader.jsx';
import { CloseButton } from '../CloseButton/CloseButton.jsx';
import { CardFooter } from '../Card/CardFooter.jsx';
import { Button } from '../Button/Button.jsx';
import { ModalSizes } from './ModalSizes.js';

const backgroundAppear = keyframes`
    from{
        background-color: rgba(0,0,0,0);
    }
    to{
        background-color: rgba(0,0,0,0.2);
    }
`

const modalAppear = keyframes`
    from{
        transform: translateY(-400px);
    }
    to{
        transform: translateY(0px);
    }
`

const ModalBackground = styled.div`
    ${props => props.isOpen ? `display: flex;` : `display: flex; visibility: hidden;`}
    background-color: ${(props) => props.isOpen ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0)"};
    transition: all 0.4s cubic-bezier(.48,.33,0,1.1);
    position:fixed;
    top: 1px;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`

console.log(ModalSizes["md"])
const CardWrapper = styled.div`
    transition: all 0.4s ease;
    transform: ${props => props.isOpen ? ` translateY(0px)` : ` translateY(-500px)`};
    opacity: ${props => props.isOpen ? "1" : "0"};
    position: relative;
    ${props => ModalSizes[props.size]}
    margin: auto;
    min-height: 200px;  
`





export const Modal = (props) => {
    const container = document.getElementById("container");

   
    return (
        ReactDOM.createPortal(
            <ModalBackground isOpen={props.isModalOpen}>
                <CardWrapper size={props.size} isOpen={props.isModalOpen}>
                    <Card>
                        {props.children}
                    </Card>
                </CardWrapper>
            </ModalBackground>
            ,
            container)
    )
}
