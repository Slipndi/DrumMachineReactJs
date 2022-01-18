import React from "react";
import styled from "styled-components";

import GridButton from "./gridButton";
import useSounds from "hooks/useSounds";


const Home = () => {
    const { ButtonsList } = useSounds();

    return (
        <Wrapper>
            <Grid>{ ButtonsList.map(({soundPlay, name}, index)=>{
                return (<GridButton key={index} soundPlay={ soundPlay } name={ name }/>);
            })}</Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Grid = styled.div`
    background:black;
    display:grid;
    width:400px;
    height:400px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows : repeat(3, 1fr);
    border: solid 1px;
    border-radius:20px;

    & p{
        border : solid 1px;
        border-radius:20px;
        margin : 10px;
    }

    @media (max-width:640px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        height:600px;
    }
`

export default Home;