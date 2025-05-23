import styled from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #222222;
    gap: 20px;
    padding-top: 100px;
    @media (max-width: 600px) {
        padding-top: 70px;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <Outlet />
            </Wrapper>
        </>
    );
}

export default App;
