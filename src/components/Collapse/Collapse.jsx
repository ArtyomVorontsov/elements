import styled, { css } from "styled-components";
import React, { useState } from 'react'



const SecondPart = styled.div`
    ${props => css`max-height: ${props.isOpen ? "500px;" : "0px;"}`}
    overflow: hidden;
    transition: max-height 0.4s ease;
    margin-top: 10px;
`

export const Collapse = (props) => {

    const [isOpen, setOpen] = useState(true)

    console.log(props.children[0])

    let firstChild = React.cloneElement(props.children[0], {
        onClick: () => {
            isOpen ? setOpen(false) : setOpen(true)
        }
    })

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                {firstChild}
            </div>
            <SecondPart isOpen={isOpen}>
                {props.children[1]}
            </SecondPart>
        </div>
    )
}

