import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SwitchTheme from "components/buttons/SwitchTheme";

const Header = ({isLigth, handleToggleTheme}) => {
    const location = useLocation();
    return (
        <Wrapper>
            <h1>Drum your life</h1>
            <nav>
                <Link to="/">
                    <MenuElement isCurrentPage={location.pathname === "/"} > 
                        Accueil
                    </MenuElement>
                </Link> 
                <Link to="/about">
                    <MenuElement isCurrentPage={location.pathname === "/"} > 
                        A propos
                    </MenuElement>
                </Link>
            </nav>
            <SwitchTheme handleToggleTheme={handleToggleTheme} isLigth={isLigth} />
        </Wrapper>
    );
};

const Wrapper = styled.header`
    height : 60px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    border-bottom : solid 1px;
    padding: 0px 24px;
    & a{
        text-decoration:none;
        color:inherit;
        margin-left:12px;
    }
    & nav {
        display: flex;
    }
`;

const MenuElement = styled.p`
    padding-bottom : 2px;
`
export default Header;