import styled from "styled-components";

export const Paginator = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto; 
`

//secondary #6c757d
//primary #0d6efd

export const PaginatorDot = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${props => props.isSelected ? "#0d6efd" : "#ededed"} ;
    border-radius: 50%;
`

export const PaginatorDotWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;

    &:hover{
        .paginatorDot{
            background-color: #5295fa;
        }
    }
    
`