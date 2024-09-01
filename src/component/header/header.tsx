import styled from "styled-components";
import Coggi from "../../assets/images/coggi.png";

const HeaderBox = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1100px;
    height: 100px;
    background: linear-gradient(to top, #222222, #grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    width: 350px;
    min-width: 350px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 20px;
`;

const Help = styled.div`
    width: 200px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    margin-right: 20px;
    border: 2px solid red;
    cursor: pointer;
`;
const Logo = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${Coggi});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;
const TitleText = styled.span`
    font-size: 2rem;
    color: white;
    user-select: none;
`;
const Header = () => {
    return (
        <HeaderBox>
            <Title>
                <Logo />
                <TitleText>반응속도 테스트</TitleText>
            </Title>
            <Help></Help>
        </HeaderBox>
    );
};

export default Header;
