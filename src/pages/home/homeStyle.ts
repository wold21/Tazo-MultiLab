import styled from 'styled-components';
import watchImage from '../../assets/images/watch.png';
import speakerImage from '../../assets/images/speaker.png';
import aimGunImage from '../../assets/images/aim-gun.png';

export const MainWrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0px 20px;
    width: 55vw;
    height: calc(100vh - 300px);
    margin-top: 100px;
    @media (max-width: 600px) {
        width: 85vw;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        gap: 20px 0px;
    }
    div {
        width: 100%;
        cursor: pointer;
        border-radius: 10px;
        border: 3px solid #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px 0px;
        filter: brightness(0.5);
        transition: all 0.5s ease, filter 0.3s ease;
    }
    div:hover,
    div:focus {
        filter: brightness(1);
        transform: scale(1.05);
        z-index: 1;
    }
`;
export const Speed = styled.div`
    height: 100%;
    background: url(${watchImage}) center / cover no-repeat;
`;
export const Sound = styled.div`
    height: 100%;
    background: url(${speakerImage}) center / cover no-repeat;
`;
export const Aim = styled.div`
    height: 100%;
    background: url(${aimGunImage}) center / cover no-repeat;
`;
export const Caption = styled.p`
    user-select: none;
    color: #ffffff;
    font-size: 1.5rem;
    text-shadow: -3px 0px #000000, 0px 3px #000000, 0px -3px #000000, 3px 0px #000000;

    @media (max-width: 1500px) {
        font-size: 1rem;
    }
`;
export const DownIconBox = styled.div<{ $isHidden: boolean }>`
    position:relative;
    top: 30px;
	width: 1.5vw;
	height: 1.5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
    animation: bounce 3s infinite;
    transition: opacity .3s ease;
    opacity: ${(props) => (props.$isHidden ? '0' : '1')};

    svg {
        stroke-width: 3;
    }

    @media (max-width: 600px) {
        width: 3vw;
        height: 3vw;
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-8px);
        }
        60% {
            transform: translateY(-6px);
        }
    `;

export const SubWrapper = styled.div`
    width: 55vw;
    margin-top: 100px;
    height: auto;
    font-family: 'DungGeunMo', 'Cafe24', 'LaundryGothic', 'Noto Sans KR', sans-serif;
    padding-bottom: 30px;
    user-select: none;
    @media (max-width: 600px) {
        width: 85vw;
    }
`;
export const Description = styled.div`
    width: 100%;
    color: #ffffff;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px 0px;

    p {
        line-height: 1.5;
    }
    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;
export const BoldText = styled.span`
    font-size: 2rem;
    animation: rainbow 1s infinite;
    text-shadow: -4px 0px #000000, 0px 4px #000000, 0px -4px #000000, 4px 0px #000000;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
    @keyframes rainbow {
        0% {
            color: #1c5d99;
        }
        20% {
            color: #639fab;
        }
        40% {
            color: #ffffff;
        }
        60% {
            color: #f57f00;
        }
        80% {
            color: #222222;
        }
        100% {
            color: #bbcde5;
        }
    }
`;
