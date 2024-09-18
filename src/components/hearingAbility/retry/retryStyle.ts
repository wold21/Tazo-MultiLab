import styled from 'styled-components';

export const ReTryBox = styled.div`
    position: absolute;
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px 0px;
    z-index: 6000;
    font-family: 'Cafe24';

    @media (max-width: 600px) {
        height: calc(100vh - 70px);
    }

    p {
        color: #ffffff;
        text-shadow: -4px 0px #000000, 0px 4px #000000, 0px -4px #000000, 4px 0px #000000;
        user-select: none;
    }
`;
export const ReTryCaption = styled.p`
    font-size: 1.8vw;
`;
export const ReTrySubCaption = styled.p`
    font-size: 1.5vw;
`;
export const RetryButton = styled.button`
    width: 15vw;
    height: 6vh;
    background-color: #ffffff;
    color: #ffffff;
    text-shadow: -2px 0px #222222, 0px 2px #222222, 0px -2px #222222, 2px 0px #222222;
    font-size: 1.2vw;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    transition: scale 0.3s ease;

    &:hover,
    &:active {
        scale: 1.05;
    }
`;
