import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;

    @media (max-width: 600px) {
        height: calc(100vh - 70px);
    }
`;
export const MainGameBox = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px 0;
`;
export const GaugeCover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px 0;
    height: 100vh;
`;
export const GaugeContainer = styled.div`
    position: relative;
    width: 45vw;
    height: 25vw;
    background: radial-gradient(circle at top left, rgba(34, 34, 34, 0.1) 5%, rgba(34, 34, 34, 0) 50%),
        radial-gradient(circle at top right, rgba(34, 34, 34, 0.1) 5%, rgba(34, 34, 34, 0) 50%),
        linear-gradient(to bottom, rgba(34, 34, 34, 0.5) 5%, rgba(34, 34, 34, 0) 30%),
        radial-gradient(circle at top, orange 10%, #ffe084);
    box-shadow: inset 0 4px 20px rgba(0, 0, 0, 1), 0 4px 20px rgba(0, 0, 0, 1);
    border-radius: 10px;
    border: 5px solid #373737;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    animation: flicker 8s infinite ease-in-out;
    overflow: hidden;

    @media (max-width: 1024px) {
        width: 90vw;
        height: 60vw;
    }

    @media (max-width: 600px) {
        width: 90vw;
        height: 60vw;
    }

    @keyframes flicker {
        0% {
            filter: brightness(1);
        }
        5% {
            filter: brightness(0.9);
        }
        10% {
            filter: brightness(0.95);
        }
        15% {
            filter: brightness(0.85);
        }
        30% {
            filter: brightness(1);
        }
        40% {
            filter: brightness(0.92);
        }
        50% {
            filter: brightness(0.87);
        }
        60% {
            filter: brightness(1);
        }
        70% {
            filter: brightness(0.93);
        }
        85% {
            filter: brightness(0.88);
        }
        100% {
            filter: brightness(1);
        }
    }
`;

export const FrequencyBox = styled.div`
    position: absolute;
    top: 60%;
    width: 10vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        width: 55px;
        font-size: 1rem;
        color: #ffffff;
        text-align: right;
        text-shadow: -2px 0px #222222, 0px 2px #222222, 0px -2px #222222, 2px 0px #222222;

        @media (max-width: 600px) {
            font-size: 0.7rem;
        }
    }
    span:nth-child(2) {
        width: 20px;
        margin-left: 5px;
    }
`;

export const FrequencyText = styled.span``;

export const StopContainer = styled.div`
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StopButton = styled.button`
    width: 10vw;
    height: 100%;
    background-color: #ffffff;
    color: #ffffff;
    text-shadow: -1px 0px #222222, 0px 1px #222222, 0px -1px #222222, 1px 0px #222222;
    border-radius: 10px;
    cursor: pointer;
    transition: scale 0.3s ease;
    font-size: 1vw;

    &:hover,
    &:active {
        scale: 1.05;
    }

    @media (max-width: 600px) {
        width: 30vw;
        height: 80%;
        font-size: 3vw;
    }
`;
