import React, { useState } from 'react'
import classes from "./Styles/Accordion.module.scss"


export const Accordion = (props) => {

    const [openedItem, setOpenedItem] = useState(0);
    let children = props.children.length > 1 ? props.children : [props.children]
  

    const childrenWithProps = children.map((child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                isOpened: openedItem === index ? true : false,
                key: index,
                id: index,
                isLast: children.length - 1 === index ? true : false,
                setOpenedItem
            })
        }
    })



    return (
        <div className={classes.accordion}>
            {childrenWithProps}
        </div>
    )
}
