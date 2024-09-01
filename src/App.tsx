import styled from "styled-components";
import Header from "./component/header/header";
import SpeedChecker from "./component/speedChecker/speedChecker";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #222222;
    gap: 20px;
    padding-top: 70px;
`;

function App() {
    return (
        <Wrapper>
            <Header />
            <SpeedChecker />
        </Wrapper>
    );
}

export default App;
