import React, { useState } from 'react'
import classes from "./Styles/Accordion.module.scss"
import arrow from "./assets/arrow.svg"
import arrowBlue from "./assets/arrowBlue.svg"

export const AccordionItem = (props) => {



    const handleItem = () => {
        props.isOpened ? props.setOpenedItem("") : props.setOpenedItem(props.id)
    }

    const keyHandle = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            handleItem()
        }
    }

   

    return (
        <div style={props.isLast ? { border: "solid 1px rgb(220,220,220)", borderRadius: "0 0 5px 5px" } :
            props.id === 0 ? { border: "solid 1px rgb(220,220,220)", borderBottom: "none", borderRadius: "5px 5px 0 0" } :
                {
                    borderTop: "solid 1px rgb(220,220,220)",
                    borderLeft: "solid 1px rgb(220,220,220)",
                    borderRight: "solid 1px rgb(220,220,220)"
                }}
            className={classes.accordionItem} onClick={handleItem}>
            <div tabIndex={1} style={props.isOpened ?
                { backgroundColor: "rgb(189, 212, 255)", color: "rgb(21, 103, 255)" } :
                { backgroundColor: "rgb(255,255,255)", color: "black" }} onKeyDown={keyHandle} className={classes.itemTitle}>
                <p className={classes.title}>{props.title}</p>
                <img style={props.isOpened ? { transform: "rotate(270deg)", width: "20px" } : { transform: "rotate(90deg)", width: "20px"}} className={classes.arrow} 
                src={props.isOpened ? arrowBlue : arrow} alt="arrow" />
            </div>
            <div style={props.isOpened ? { maxHeight: "500px", borderTop: "solid 1px rgb(220,220,220)" } : { maxHeight: "0px", borderTop: "solid 1px transparent" }} className={classes.itemOpen}>
               { props.children }   
            </div>
        </div>
    )
}
