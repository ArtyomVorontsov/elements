import styled from "styled-components";

const cardSizes = {
    sm: `width: 100px;`,
    md: `width: 200px;`,
    lg: `width: 300px;`,
    xl: `width: 400px;`,
}

export const Card = styled.div`
    background-color: white;
    border: solid 1px rgb(200,200,200);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${(props) => cardSizes[props.size]}
`