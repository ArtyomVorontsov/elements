import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { Collapse } from '../Collapse/Collapse.jsx'
import { Button } from '../Button/Button.jsx'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup.jsx'
import { Paginator, PaginatorDot, PaginatorDotWrapper } from './Paginator'

export const CarouselCardWrapper = styled.div`
    width: ${props => props.cardWidth}px;
    border: solid 1px black;
    height: 100vh;
    overflow: hidden;

    img{
        width: 100%;
        user-select: none;
    }
`

const CarouselWheel = styled.div`
    display: flex;
    flexDirection: row; 
    width: ${props => props.width}px; 
    position: absolute;    
`

export const Carousel = (props) => {


    const [isDown, setDown] = useState(false);
    const [startX, setStartX] = useState();
    const [clientStartX, setClientStartX] = useState();
    const [offset, setOffset] = useState();
    const [cardPositions, setCardPositions] = useState([]);
    const [currentCardPositionIndex, setCurrentCardPositionIndex] = useState(0);
    const [countOfCards, setCountOfCards] = useState(props.children.length);
    const [cardWidth, setCardWidth] = useState(window.innerWidth);

    console.log("rerender");

    //turn on transition 
    const onTransition = () => {
        const carouselWheel = document.getElementById("carouselWheel");
        carouselWheel.style.transition = "transform 0.2s ease"
    }

    //set offset from left edge
    const setOffsetCarouselWheel = (wheelOffset) => {
        const carouselWheel = document.getElementById("carouselWheel");
        carouselWheel.style.transform = `translateX(${wheelOffset}px)`
    }


    //determine which card is closer
    const setTranslateX = (offsetLeft, direction = null) => {
        const diff = []
        for (let i = 0; i < cardPositions.length; i++) {
            diff.push(Math.round(cardPositions[i] - Math.abs(offsetLeft)))
        }
        console.log("diff:", diff)

        if (direction === "toLeft" && currentCardPositionIndex === 0) {
            setOffsetCarouselWheel(-cardPositions[cardPositions.length - 2]);
            setCurrentCardPositionIndex(cardPositions.length - 2)
        } else if (direction === "toRight" && currentCardPositionIndex === cardPositions.length - 2) {
            setOffsetCarouselWheel(-cardPositions[0]);
            setCurrentCardPositionIndex(0)
        } else {
            const positiveDiff = diff.map(d => Math.abs(d))

            positiveDiff[currentCardPositionIndex] = positiveDiff[currentCardPositionIndex] + (window.innerWidth / 1.3)
            const minDiffIndex = positiveDiff.indexOf(Math.min(...positiveDiff))
            setOffsetCarouselWheel(-cardPositions[minDiffIndex]);
            setCurrentCardPositionIndex(minDiffIndex)
        }


    }

    //Buttons events
    const nextCard = (step) => {
        onTransition()
        const itIsLastCard = currentCardPositionIndex >= (cardPositions.length - 1) - step
        setOffsetCarouselWheel(itIsLastCard ? (-cardPositions[0]) : (-cardPositions[currentCardPositionIndex + step]))
        setCurrentCardPositionIndex(itIsLastCard ? 0 : currentCardPositionIndex + step)
    }

    const prevCard = (step) => {
        onTransition()
        const itIsFirstCard = currentCardPositionIndex <= 0
        setOffsetCarouselWheel(itIsFirstCard ? (-cardPositions[(cardPositions.length - 1) - step]) : (-cardPositions[currentCardPositionIndex - step]))
        setCurrentCardPositionIndex(itIsFirstCard ? (cardPositions.length - 1) - step : currentCardPositionIndex - step)
    }


    //Mouse swipe events  
    const onMouseDown = (e) => {
        const carouselWheel = document.getElementById("carouselWheel");
        e.preventDefault();
        setDown(true);
        setClientStartX(e.clientX)
        setStartX(e.pageX - carouselWheel.getBoundingClientRect().left);
        carouselWheel.style.transition = `none`
    }

    const onMouseMove = (e) => {
        e.preventDefault();
        setOffsetCarouselWheel(e.clientX - startX)
    }

    const onMouseUp = (e) => {
        const direction = e.clientX > clientStartX ? "toLeft" : "toRight"
        onTransition();
        e.preventDefault();
        setDown(false);
        setTranslateX(carouselWheel.getBoundingClientRect().left, direction);
    }

    const onMouseOut = () => {
        onTransition()
        const carouselWheel = document.getElementById("carouselWheel").getBoundingClientRect();
        setDown(false);
        setTranslateX(carouselWheel.left)
    }

    //Touch events
    const onTouchStart = (e) => {
        setClientStartX(e.touches[0].clientX)
        const carouselWheel = document.getElementById("carouselWheel");
        carouselWheel.style.transition = "none";
        setDown(true);
        setStartX(e.touches[0].clientX - carouselWheel.getBoundingClientRect().left)
    }

    const onTouchMove = (e) => {
        setOffsetCarouselWheel((Math.round(e.touches[0].clientX) - startX))
    }

    const onTouchEnd = (e) => {
        const direction = e.changedTouches[0].clientX > clientStartX ? "toLeft" : "toRight"
        onTransition();
        setDown(false);
        setTranslateX(carouselWheel.getBoundingClientRect().left, direction)
    }


    //Functions for carousel start
    const setupPositions = (carouselCardWrapperWidth, cards) => {
        const positions = [0, carouselCardWrapperWidth];
        for (let i = 0; i < cards.length - 1; i++) {
            positions.push((Math.abs(positions[i + 1]) + carouselCardWrapperWidth));
        }
        setOffset(positions[0]);
        setCardPositions(positions)
    }

    const getCardWidth = () => {
        setCardWidth(window.innerWidth);
        setupPositions(window.innerWidth, props.children)
    }

    window.onresize = getCardWidth;

    useEffect(() => {
        setupPositions(cardWidth, props.children)
    }, [])

    const paginatorDotClick = (index) => {
        onTransition();
        setTranslateX(cardPositions[index])
    }


    //Elements mapping
    const paginatorDots = props.children.map((child, index) => {
        return <PaginatorDotWrapper onClick={() => paginatorDotClick(index)}>
            <PaginatorDot className={"paginatorDot"} isSelected={currentCardPositionIndex === index} key={index} id={index} />
        </PaginatorDotWrapper>

    })

    const children = props.children.map((child, index) => {
        return React.cloneElement(child, {
            cardWidth,
            key: index
        })
    })


    return (
        <>
            <div id={"carousel"} onMouseOut={onMouseOut}
                style={{
                    overflowY: "hidden",
                    position: "relative",
                    overflow: "hidden",
                    width: "100wv",
                    height: "40vh"
                }}>
                <CarouselWheel
                    width={countOfCards * cardWidth}
                    offset={offset}
                    id={"carouselWheel"}
                    onMouseMove={isDown ? onMouseMove : null}
                    onMouseUp={onMouseUp}
                    onMouseDown={onMouseDown}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {children}
                </CarouselWheel>

            </div>
            <Paginator>
                {paginatorDots}
            </Paginator>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <ButtonGroup>
                    <Button onClick={() => prevCard(1)} size={"md"} color={"primary"}>back</Button>
                    <Button onClick={() => nextCard(1)} size={"md"} color={"primary"}>next</Button>
                </ButtonGroup>
            </div>



        </>

    )
}
