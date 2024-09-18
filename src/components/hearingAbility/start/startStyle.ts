import styled from 'styled-components';

export const DescriptionBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: calc(100vh - 70px);
    z-index: 6000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px 0;
    font-family: 'Cafe24';

    @media (max-width: 600px) {
        width: 80vw;
    }
`;
export const DescriptionText = styled.p`
    font-size: 1.5rem;
    color: #ffffff;
    margin-top: 20px;
    user-select: none;
    text-shadow: -4px 0px #222222, 0px 4px #222222, 0px -4px #222222, 4px 0px #222222;

    @media (max-width: 1500px) {
        font-size: 1rem;
    }
    @media (max-width: 600px) {
        margin-top: 10px;
        font-size: 0.8rem;
    }
`;
export const DescriptionSubText = styled.p`
    font-size: 1rem;
    color: #ffffff;
    margin-left: 20px;
    margin-top: 10px;
    text-shadow: -4px 0px #222222, 0px 4px #222222, 0px -4px #222222, 4px 0px #222222;
    user-select: none;
    line-height: 1.3rem;
    @media (max-width: 1500px) {
        font-size: 0.7rem;
    }
    @media (max-width: 600px) {
        font-size: 0.6rem;
        margin-top: 5px;
        line-height: 1rem;
    }
`;

export const StartButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    margin-top: 20px;
`;
export const StartButton = styled.button`
    width: 10vw;
    height: 5vh;
    background-color: #ffffff;
    color: #ffffff;
    text-shadow: -2px 0px #222222, 0px 2px #222222, 0px -2px #222222, 2px 0px #222222;
    border-radius: 10px;
    font-size: 1.25vw;
    font-family: 'Cafe24';
    cursor: pointer;
    transition: all 0.3s;
    $:hover {
        scale: 1.05;
    }

    @media (max-width: 600px) {
        font-size: 0.7rem;
        width: 20vw;
    }
`;
