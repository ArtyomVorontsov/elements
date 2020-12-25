import styled from "styled-components"
import { AlertColors } from './AlertColors'

export const Alert = styled.div`
    padding: 5px 20px 5px 20px;
    border: solid 1px;
    border-radius: 5px;
    ${props => AlertColors[props.color]}
`


