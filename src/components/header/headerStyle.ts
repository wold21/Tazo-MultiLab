import styled from 'styled-components';
import GoldenRetriever from '../../assets/images/goldenRetriever.png';

export const HeaderBox = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1100px;
    height: 100px;
    background: linear-gradient(to top, transparent 10%, #222222 90%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    @media (max-width: 600px) {
        height: 70px;
    }
`;

export const Title = styled.div`
    width: 320px;
    min-width: 320px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    cursor: pointer;
`;

export const LogoBox = styled.div`
    width: 70px;
    height: 70px;

    @media (max-width: 600px) {
        width: 40px;
        height: 40px;
    }
`;
export const Logo = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${GoldenRetriever});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;
export const TitleText = styled.div`
    color: white;
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px 0;
`;
export const MainText = styled.h1`
    font-size: 2rem;
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;
export const SubText = styled.h2`
    font-size: 0.8rem;
    color: #696969;
    text-shadow: -1px 0px #000000, 0px 1px #000000, 0px -1px #000000, 1px 0px #000000;
    @media (max-width: 600px) {
        font-size: 0.6rem;
    }
`;
