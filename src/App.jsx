import React, { useState } from "react";
import ReactDOM from "react-dom"
import { Accordion } from "./components/Accordion/Accordion.jsx";
import { AccordionItem } from "./components/Accordion/AccordionItem.jsx";
import classes from "./Styles/App.module.scss"
import { Alert } from "./components/Alert/Alert.jsx";
import { Badge } from "./components/Badge/Badge.jsx";
import { Button } from "./components/Button/Button.jsx";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup.jsx";
import { Card } from "./components/Card/Card.jsx";
import { CardHeader } from "./components/Card/CardHeader.jsx";
import { CardBody } from "./components/Card/CardBody.jsx";
import { CardFooter } from "./components/Card/CardFooter.jsx";
import { StyledCloseButton, CloseButton } from "./components/CloseButton/CloseButton.jsx";
import { Collapse } from "./components/Collapse/Collapse.jsx";
import { Dropdown, DropdownCard, DropdownLi, DropdownButton } from "./components/Dropdown/Dropdown.jsx";
import { ListGroup, ListGroupLi } from "./components/ListGroup/ListGroup.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { Navs } from "./components/Navs/Navs.jsx";
import { CarouselCardWrapper, Carousel } from "./components/Carousel";

const App = (props) => {



    return (
        <div className={classes.app}>
            <div className={classes.accordionWrapper}>
                <Carousel>

                    <CarouselCardWrapper>
                        {1}
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <h1>
                                You can buy theese cats tomorrow!
                            </h1>
                            <div style={{width: "100px"}}>
                            <Button size={"md"} color={"warning"}>
                                Show me cats!
                            </Button>
                            </div>
                           
                            {/* <img draggable={false} src='https://cdnuploads.aa.com.tr/uploads/Contents/2019/10/24/thumbs_b_c_fb8263ce4f9f43ebdc7634b0d1eb0a08.jpg?v=115427' alt="" /> */}
                        </div>

                    </CarouselCardWrapper>
                    <CarouselCardWrapper>
                        {2}
                        <img draggable={false} src='https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg' alt="" />
                    </CarouselCardWrapper>
                    <CarouselCardWrapper>
                        {3}
                        <img draggable={false} src='https://www.sciencenewsforstudents.org/wp-content/uploads/2020/05/1030_LL_domestic_cats-800x450.jpg' alt="" />
                    </CarouselCardWrapper>
                    <CarouselCardWrapper>
                        {4}
                        <img draggable={false} src='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2' alt="" />
                    </CarouselCardWrapper>
                    <CarouselCardWrapper>
                        {5}
                        <img draggable={false} src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' alt="" />
                    </CarouselCardWrapper>
                    <CarouselCardWrapper>
                        {6}
                        <img draggable={false} src='https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg' alt="" />
                    </CarouselCardWrapper>
                    <CarouselCardWrapper>
                        {7}
                        <img draggable={false} src='https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg' alt="" />
                    </CarouselCardWrapper>
                </Carousel>
            </div>
        </div>
    )
}

const container = document.getElementById("container");
ReactDOM.render(<App />, container);
