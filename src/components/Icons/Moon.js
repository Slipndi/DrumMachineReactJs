import React from "react";
import styled from "styled-components";

const Moon = ({isLigth}) => {
    return (
        <Wrapper>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                role="img" 
                width="27" 
                height="27" 
                viewBox="0 0 750 850">
                    <g transform="translate(750 0) scale(-1 1)">
                        <path d="M732 392q3-2 7-1t3 5q-4 76-36 142t-84 114t-122 74t-147 23q-71-4-133-33t-109-77t-77-109T1 397q-4-78 23-147t74-122t114-84T354 8q4 0 6 3t-2 7q-31 40-46 90t-8 106q5 45 25 85t51 71t71 51t85 25q56 7 106-8t90-46z" fill={isLigth ? "#092C3E" : "#D4D4D4"}/>
                    </g>
                </svg>
        </Wrapper>
    );
} 

const Wrapper = styled.div`
    padding-left:10px;
`

export default Moon;


