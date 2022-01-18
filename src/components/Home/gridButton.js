import React from "react";
import styled from "styled-components";

const gridButton = ({soundPlay, name}) => {
    return (
        <Wrapper onClick={soundPlay}>
             {name}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    margin:15px;
    border: 1px solid white;
    -webkit-box-shadow: 0px 0px 10px 4px #FF0000, inset 0px 0px 10px 3px #FF0000; 
    box-shadow: 0px 0px 10px 4px #FF0000, inset 0px 0px 10px 3px #FF0000;
    background: #565656;
    background: radial-gradient(circle, rgba(0,0,0,1) 15%, rgba(0,0,0,0.9360119047619048) 81%);
    cursor:pointer;
` 
export default gridButton;
