import React, { useState } from 'react'
import styled from "styled-components"
import { Button } from '../Button/Button.jsx'
import arrow from "./assets/drop-down-arrow.svg"
import { Card } from '../Card/Card.jsx'


export const DropdownLi = styled.li`
    width: 100%;
    list-style: none;
    padding: 20px 20px;

    &:hover{
        background-color: rgb(245,245,245);
    }
`

const DropdownUl = styled.ul`
    width: 100%;
    margin: 0px;
    padding: 0px;

`

export const DropdownCard = (props) => {
    return (
        <Card onBlur={props.openHandler} style={props.isOpen ? { display: "block", position: "absolute", width: "100%" } : { display: "none" }}>
            <DropdownUl>
                {props.children}
            </DropdownUl>
        </Card>
    )
}



export const DropdownButton = (props) => {
    return (
        <Button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }} onBlur={props.openHandler} onClick={props.openHandler} size={"adaptive"} {...props}>{props.children} <img width={20} src={arrow} alt="arrow" /></Button>
    )
}


export const Dropdown = (props) => {

    const [isOpen, setOpen] = useState(false);
    const openHandler = () => {
        isOpen ? setOpen(false) : setOpen(true)
    }


    const children = props.children.map((child, index) => {
        return React.cloneElement(child, {
            color: props.color,
            openHandler,
            isOpen,
            key: index
        })
    })

    return (
        <>
            <div style={{ width: "200px", height: "auto", position: "relative" }}>
                {children}
            </div>
        </>
    )
}
