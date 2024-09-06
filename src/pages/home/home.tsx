import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import watchImage from "../../assets/images/watch.png";
import speakerImage from "../../assets/images/speaker.png";

const MainWrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0px 20px;
    width: 55vw;
    height: calc(100vh - 300px);
    margin-top: 100px;
    div {
        transition: all 0.5s ease, filter 0.3s ease;
        cursor: pointer;
        border-radius: 10px;
        border: 3px solid #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px 0px;
    }
    div:hover {
        transform: scale(1.05);
        z-index: 1;
    }
    div:not(:hover) {
        filter: brightness(0.5);
    }
`;
const Speed = styled.div`
    height: 100%;
    background: url(${watchImage}) center / cover no-repeat;
`;
const Sound = styled.div`
    height: 100%;
    background: url(${speakerImage}) center / cover no-repeat;
`;
const Aim = styled.div`
    height: 100%;
    background-color: green;
`;
const Caption = styled.p`
    user-select: none;
    color: #ffffff;
    font-size: 1.3rem;
    text-shadow: -3px 0px #000000, 0px 3px #000000, 0px -3px #000000, 3px 0px #000000;
`;

const SubWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0px 20px;
    width: 55vw;
    height: calc(100vh - 300px);
    background-color: #343434;
`;

export const Home = () => {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <>
            <MainWrapper>
                <Speed onMouseEnter={() => setHoveredItem("speed")} onMouseLeave={() => setHoveredItem(null)} onClick={() => navigate("/speed-checker")}>
                    {hoveredItem === "speed" && (
                        <>
                            <Caption>React</Caption>
                            <Caption>Speed</Caption>
                        </>
                    )}
                </Speed>
                <Sound onMouseEnter={() => setHoveredItem("sound")} onMouseLeave={() => setHoveredItem(null)}>
                    {hoveredItem === "sound" && (
                        <>
                            <Caption>Hearing</Caption>
                            <Caption>ability</Caption>
                        </>
                    )}
                </Sound>
                <Aim onMouseEnter={() => setHoveredItem("aim")} onMouseLeave={() => setHoveredItem(null)}>
                    {hoveredItem === "aim" && (
                        <>
                            <Caption>Accuracy</Caption>
                            <Caption>ability</Caption>
                        </>
                    )}
                </Aim>
            </MainWrapper>
            <SubWrapper></SubWrapper>
        </>
    );
};
