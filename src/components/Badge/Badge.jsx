import styled from "styled-components"
import {BadgeColors} from "./BadgeColors.js"

export const Badge = styled.span`
   padding: 5px;
   border: solid 1px;
   border-radius: 5px;
   font-weight: 500;
   color: white;
   cursor: pointer;
   ${props => BadgeColors[props.color]}
`