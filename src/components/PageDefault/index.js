import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

// function PageDefault(props) {
function PageDefault({children}) {
    return (
        /*React.Fragment*/
        <> 
            <Menu />
                <Main>
                    {/* {props.children} */}
                    {children}
                </Main>
            <Footer />
        </>
        /*React.Fragment*/
    );
}

export default PageDefault;