import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: deepskyblue;
    gap: 20px;
`;
const Stage = styled.div<{ $bgColor: string }>`
    width: 20vw;
    height: 20vw;
    border: 10px solid white;
    border-radius: 50%;
    background-color: ${(props) => props.$bgColor};
    padding: 20px;
    position: absolute;
    cursor: pointer;
`;
const Caption = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: white;
    z-index: 5;
    user-select: none;
`;

interface timeType {
    id: number;
    time: number;
}

function App() {
    const [ready, setReady] = useState(false);
    const [bgColor, setBgColor] = useState("green");
    const [text, setText] = useState("Let's Start!");
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    // const [count, setCount] = useState(0);
    // const [timeArray, setTimeArray] = useState<timeType[]>([]);

    const measurementStart = () => {
        const randomTime = Math.floor(Math.random() * 5) + 1;

        setTimeout(() => {
            setText("Click!");
            setBgColor("orange");
            setStartTime(Date.now());
        }, randomTime * 1000);
    };
    const handleReady = () => {
        if (!ready) {
            // 게임 시작
            setReady(true);
            setText("Wait...");
            setEndTime(0);
            measurementStart();
        } else {
            // 게임 종료 및 초기화
            if (bgColor === "green") return;
            const elapsedTime = Math.floor(Date.now() - startTime);
            setText("Retry");
            setBgColor("green");
            setEndTime(elapsedTime);
            // setTimeArray([...timeArray, { id: timeArray.length, time: elapsedTime }]);
            setReady(false);
        }
    };
    return (
        <Wrapper>
            <Caption>{text}</Caption>
            <Stage onClick={handleReady} $bgColor={bgColor}></Stage>
            <Caption>{endTime != 0 ? endTime + "ms" : ""}</Caption>
            {/* {timeArray.map((time) => (
                <Caption key={time.id}>{time.time}ms</Caption>
            ))} */}
        </Wrapper>
    );
}

export default App;
