import React from "react";
import styled from "styled-components";
//import './SwitchTheme.css';
import Sun from "../Icons/Sun";
import Moon from "../Icons/Moon";

const SwitchTheme = ( {isLigth, handleToggleTheme} ) => {
    return (
        <Wrapper>
           <Sun isLigth={isLigth} />
           <label>
                <input type='checkbox'/>
                <span className="check" onClick={handleToggleTheme} ></span>
            </label>
            <Moon isLigth={isLigth} />            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;

    input[type='checkbox'] {
        -webkit-appearance: none;
        visibility: hidden;
        display: none;
    }
    
    .check {
        position: relative;
        display: block;
        width: 40px;
        height: 20px;
        background: #092C3E;
        cursor: pointer;
        overflow: hidden;
        border-radius: 20px;
    }
    
    input[type='checkbox']:checked~.check {
        background: #D4D4D4;
    }
    
    .check:before {
        content: '';
        position: absolute;
        top:2px;
        left: 2px;
        background: #D4D4D4;
        width:16px;
        height:16px;
        border-radius: 50%;
        transition: 0.5s ;   
    }
    
    input[type='checkbox']:checked~.check:before {
        transform: translateX(-50px);
    }
    
    .check:after {
        content: '';
        position: absolute;
        top:2px;
        right: 2px;
        background: #092C3E;
        width:16px;
        height:16px;
        border-radius: 50%;
        transition: 0.5s ;
        transform: translateX(50px);   
    }
    
    input[type='checkbox']:checked~.check:after {
        transform: translateX(0px);
    }

`

export default SwitchTheme;