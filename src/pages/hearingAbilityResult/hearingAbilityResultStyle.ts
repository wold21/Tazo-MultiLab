import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
        height: calc(100vh - 70px);
    }
`;
export const DownIconBox = styled.div<{ $isHidden: boolean }>`
    position:relative;
    bottom: 20vh;
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

export const MainWrapper = styled.div`
    width: 100vw;
    margin-top: 10vh;
    margin-bottom: 30vh;
    @media (max-width: 600px) {
        height: calc(100vh - 70px);
    }
`;

export const ResultBox = styled.div`
    width: 100vw;
    height: 40vh;
    margin-top: 10vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Cafe24', 'Noto Sans KR', sans-serif;
    gap: 20px 0px;
    user-select: none;
    background-color: rgba(255, 255, 255, 0.25);

    @media (max-width: 600px) {
        width: 100vw;
        height: 20vh;
        background-color: transparent;
    }
`;

export const ResultCaption = styled.div<{ top: string; left: string; fs: string }>`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    font-size: ${(props) => props.fs};
    color: #ffffff;
    text-shadow: -4px 0px #000000, 0px 4px #000000, 0px -4px #000000, 4px 0px #000000;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const ResultAgeBox = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Cafe24', 'Noto Sans KR', sans-serif;
    margin-right: 25vh;
    user-select: none;

    div {
        transform: translateY(100%);
        animation: fadeIn 2s ease-out forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        50% {
            opacity: 0.1;
        }
        70% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const ResultAgeCaption = styled.div<{ top: string; left: string; fs: string }>`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    font-size: ${(props) => props.fs};
    color: #ffffff;
    text-shadow: -4px 0px #000000, 0px 4px #000000, 0px -4px #000000, 4px 0px #000000;
    letter-spacing: 0.2em;
    @media (max-width: 600px) {
        font-size: 15vw;
    }
`;

export const ResultCaptionSub = styled.span`
    font-size: 3vw;
    vertical-align: baseline;
`;
export const SubWrapper = styled.div`
    width: 100%;
    padding: 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    p {
        line-height: 1.5;
        color: #ffffff;
        text-shadow: -3px 0px #000000, 0px 3px #000000, 0px -3px #000000, 3px 0px #000000;
    }
    @media (max-width: 600px) {
        width: 80vw;
        margin-bottom: 150px;
    }
`;
export const SubDesctiptioBold = styled.p`
    margin-top: 20px;
    font-size: 1.2vw;
`;
export const SubDesctiptioSub = styled.p`
    margin-top: 15px;
    margin-left: 10px;
    font-size: 1vw;
`;
export const SubDesctiption = styled.p`
    margin-left: 25px;
    font-size: 0.8vw;
`;
