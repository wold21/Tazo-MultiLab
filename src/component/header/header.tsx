import { HeaderBox, Title, LogoBox, Logo, TitleText, MainText, SubText } from './headerStyle';
import styled from 'styled-components';
import { HomeIcon } from '../../assets/icon/icon';
import { useNavigate } from 'react-router-dom';

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

    svg {
        transition: all 0.3s;
    }
    svg:hover {
        stroke-width: 2;
        scale: 1.1;
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const handleNavigation = (menu: string) => {
        if (menu === '/') {
            window.location.href = '/';
        }
        navigate(menu);
    };
    return (
        <HeaderBox>
            <Title onClick={() => handleNavigation('/')}>
                <LogoBox>
                    <Logo />
                </LogoBox>
                <TitleText>
                    <MainText>Tazo's Lab</MainText>
                    <SubText>The retriever is always right.</SubText>
                </TitleText>
            </Title>
            <Menu>
                <IconBox onClick={() => handleNavigation('/')}>
                    <HomeIcon />
                </IconBox>
                {/* <IconBox>
					<HamburgerIcon />
				</IconBox> */}
            </Menu>
        </HeaderBox>
    );
};

export default Header;
