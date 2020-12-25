import React from 'react'


export const ButtonGroup = (props) => {

    const childrenWithProps = props.children.map((child, index) => {
        if (React.isValidElement) {
            return React.cloneElement(child, {
                inGroup: true,
                isLast: props.children.length-1 === index,
                positionInGroup: index,
                key: index
            })
        }
    })

    return (
        <div {...props} style={{display: "flex", flexDirection: "row"}}>
            {childrenWithProps}
        </div>
    )
}
