import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import GlobalStyle  from './GlobalStyle';
import LightTheme from './themes/Light.json';
import DarkTheme from './themes/Dark.json';

export default function Layout({children}) {
    const [isLight, setIsLight] = useState(true);
    
    const handleToggleTheme = () => setIsLight(!isLight);

    return( 
        <ThemeProvider theme={ isLight ? LightTheme : DarkTheme }>
            <Wrapper> 
                <GlobalStyle />
                {children}
                <button onClick={ handleToggleTheme }>Passer au thème {isLight ? "sombre" : "clair"}</button>
            </Wrapper>
        </ThemeProvider>
        );
}

const Wrapper = styled.div``;