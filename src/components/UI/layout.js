import styled, { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

import GlobalStyle  from './GlobalStyle';

import LightTheme from './themes/Light.json';
import DarkTheme from './themes/Dark.json';

import Header from 'components/Header';
import Footer from 'components/Footer';

 const Layout = ({children}) => {
    const [isLigth, setIsLight] = useState(true);
    
    const handleToggleTheme = () => setIsLight(!isLigth);

    return( 
        <ThemeProvider theme={ isLigth ? LightTheme : DarkTheme }>
            <Wrapper> 
                <GlobalStyle />
                <Header isLigth={ isLigth } handleToggleTheme={ handleToggleTheme } />
                <Main>
                    {children}
                </Main>
                <Footer />
            </Wrapper>
        </ThemeProvider>
        );
}

const Wrapper = styled.div``;

const Main = styled.div`
   min-height : calc(100vh - 140px);
   width:96%;
   max-width:1040px;
   margin:auto;
   margin-top:30px;
`;

export default Layout;