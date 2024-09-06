import { HeaderBox, Title, LogoBox, Logo, TitleText, MainText, SubText } from "./headerStyle";
import styled from "styled-components";
import { HomeIcon, HamburgerIcon } from "../../assets/icon/Icon";
import { useNavigate } from "react-router-dom";

const Menu = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0px 1vw;
    color: white;
    padding-right: 2vw;
`;
const IconBox = styled.div`
    width: 2.1vw;
    height: 2.1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg:hover {
        stroke-width: 2;
        scale: 1.1;
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const handleNavigation = (menu: string) => {
        navigate(menu);
    };
    return (
        <HeaderBox>
            <Title onClick={() => handleNavigation("/")}>
                <LogoBox>
                    <Logo />
                </LogoBox>
                <TitleText>
                    <MainText>Tazo's Lab</MainText>
                    <SubText>The retriever is always right.</SubText>
                </TitleText>
            </Title>
            <Menu>
                <IconBox onClick={() => handleNavigation("/")}>
                    <HomeIcon />
                </IconBox>
                <IconBox>
                    <HamburgerIcon />
                </IconBox>
            </Menu>
        </HeaderBox>
    );
};

export default Header;
