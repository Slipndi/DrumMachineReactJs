import styled from "styled-components";
import React from "react";

const Footer = () => {
    return (
        <Wrapper>
            <p>Fait par Ludovic JORGE DO MARCO</p>
        </Wrapper>
    );
};

const Wrapper = styled.footer`   
    height : 40px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-top : solid 1px;

`;

export default Footer;