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
export const LodingBox = styled.div`
    height: 12px;
    width: 80%;
    max-width: 500px;
    // top: 100px;
    border: 3.5px solid #ffffff;
    border-radius: 10px;
    transition: width 0.5s ease-in-out;
`;
export const Loading = styled.div<{ $width: number; $totalSteps: number }>`
    height: 100%;
    width: ${(props) => (props.$width / props.$totalSteps) * 100}%;
    background-color: #61b3ff;
    border-radius: 10px;
    transition: width 0.4s ease-in-out;
`;
export const History = styled.div`
    height: 25px;
    width: 80%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const HistoryItem = styled.span<{ $width: number; $totalSteps: number }>`
    width: ${(props) => (props.$width / props.$totalSteps) * 100}%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000000;
    user-select: none;
    text-shadow: -3px 0px #ffffff, 0px 3px #ffffff, 0px -3px #ffffff, 3px 0px #ffffff;
    @media (max-width: 600px) {
        font-size: 0.7rem;
    }
`;
export const Stage = styled.div`
    width: 50vw;
    height: 65vh;
    position: relative;
    border-radius: 20px;
    border: 4px solid white;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px 0;
    @media (max-width: 600px) {
        width: 90vw;
        height: 45vh;
    }
`;
export const Caption = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: white;
    z-index: 5;
    user-select: none;
    text-shadow: -3px 0px #000000, 0px 3px #000000, 0px -3px #000000, 3px 0px #000000;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export const Circle = styled.div<{ $left: number; $top: number; $size: number }>`
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    cursor: pointer;
    left: ${(props) => props.$left}px;
    top: ${(props) => props.$top}px;
    border: 3px solid white;
`;

export const ProgressBackground = styled.div<{ $bgColor: string; $width: number; $display: number }>`
    width: ${(props) => props.$width}%;
    height: 100%;
    background-color: ${(props) => props.$bgColor};
    border-radius: ${(props) => (props.$width === 100 ? '15px' : '0 15px 15px 0')};
    position: absolute;
    opacity: ${(props) => props.$display};
    transition: width 0.1s linear, border-radius 0.2s ease-in-out, opacity 0.5s ease-in-out,
        background-color 0.2s ease-in-out;
    right: 0;
    top: 0;
`;

export const ResultBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(20px);
    z-index: 5000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px 0;
    background-color: transparent;
`;
export const AverageBox = styled.div`
    color: white;
    font-size: 2rem;
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;
export const HistoryBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 30px;
    color: white;
    font-size: 1.5rem;
    @media (max-width: 600px) {
        font-size: 0.8rem;
        gap: 0 10px;
    }
`;
export const RetryBox = styled.div`
    width: 50px;
    height: 50px;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
        scale: 1.15;
        rotate: 180deg;
    }
`;
