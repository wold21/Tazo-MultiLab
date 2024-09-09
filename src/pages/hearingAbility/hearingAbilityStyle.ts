import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MainGameBox = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px 0;
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

export const ClipingLight = styled.div`
    position: absolute;
    top: 60%;
    left: calc(50% -10px);
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 0, 0, 0.8);
    animation: blink 1s infinite;
    z-index: 1;

    @keyframes blink {
        0% {
            background-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.8);
        }
        25% {
            ackground-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.6);
        }
        50% {
            background-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5), 0 0 5px rgba(200, 0, 0, 0.8);
        }
        75% {
            ackground-color: red;
            box-shadow: inset 0 0.5px 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.6);
        }
        100% {
            background-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.8);
        }
    }
`;
export const FrequencyBox = styled.div`
    position: absolute;
    bottom: 10vh;
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
    }
    span:nth-child(2) {
        width: 20px;
        margin-left: 5px;
    }
`;
export const FrequencyText = styled.span``;
