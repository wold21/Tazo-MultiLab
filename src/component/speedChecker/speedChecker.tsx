import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Average from "../average/average";

// color palette
// #1C5D99
// #639FAB
// #FFFFFF
// #222222
// #BBCDE5

const Stage = styled.div<{ $bgColor: string }>`
    width: 50vw;
    height: 45vh;
    border-radius: 20px;
    background-color: ${(props) => props.$bgColor};
    padding: 20px;
    position: absolute;
    cursor: pointer;
    border: 4px solid white;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.5);
    transition: scale 0.3s ease-in-out;
    &:hover {
        scale: 1.01;
    }
`;
const Caption = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: white;
    z-index: 5;
    user-select: none;
`;
const LodingBox = styled.div`
    position: absolute;
    height: 12px;
    width: 500px;
    top: 92px;
    border: 3px solid #ccc;
    border-radius: 10px;
    transition: width 0.5s ease-in-out;
`;
const Loading = styled.div<{ $width: number }>`
    position: absolute;
    height: 100%;
    width: ${(props) => props.$width}00px;
    background-color: #61b3ff;
    border-radius: 10px;
    transition: width 0.4s ease-in-out;
`;
const History = styled.div`
    position: absolute;
    height: 50px;
    width: 500px;
    top: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const HistoryItem = styled.span`
    width: 100px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    user-select: none;
`;
const ResultBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(20px);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px 0;
    background-color: transparent;
`;
const AverageBox = styled.div`
    color: white;
    font-size: 2rem;
`;
const HistoryBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 30px;
    color: white;
    font-size: 1.5rem;
`;
const RetryBox = styled.div`
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
interface timeType {
    id: number;
    time: number;
}

const SpeedChecker = () => {
    const [ready, setReady] = useState(false);
    const [bgColor, setBgColor] = useState("#1C5D99");
    const [text, setText] = useState("Let's Start!");
    const [startTime, setStartTime] = useState(0);
    const [exitCount, setExitCount] = useState(0);
    const [timeArray, setTimeArray] = useState<timeType[]>([]);
    const [average, setAverage] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const measurementStart = () => {
        const randomTime = Math.floor(Math.random() * 5) + 1;
        setTimeout(() => {
            setText("Click!");
            setBgColor("#EDAD3F");
            setStartTime(Date.now());
        }, randomTime * 1000);
    };
    const scoreCollector = () => {
        const elapsedTime = Math.floor(Date.now() - startTime);
        setText("Keep Going!");
        setBgColor("#1C5D99");
        setReady(false);
        setTimeArray([...timeArray, { id: timeArray.length, time: elapsedTime }]);

        if (exitCount === 0) {
            setAverage(elapsedTime);
        }
        setExitCount(exitCount + 1);
    };
    const handleReset = () => {
        setTimeArray([]);
        setAverage(0);
        setExitCount(0);
        setReady(false);
        setBgColor("#1C5D99");
        setText("Let's Start!");
        setIsShow(false);
    };
    const handleReady = () => {
        if (!ready) {
            setReady(true);
            setText("Wait...");
            measurementStart();
        } else {
            if (bgColor === "#1C5D99") return;
            scoreCollector();
        }
    };
    useEffect(() => {
        if (timeArray.length < 5 && timeArray.length > 0) {
            const sum = timeArray.reduce((acc, cur) => acc + cur.time, 0);
            setAverage(Math.floor(sum / timeArray.length));
        } else if (timeArray.length === 5) {
            setTimeout(() => {
                setIsShow(true);
            }, 500);
        }
    }, [timeArray]);
    return (
        <>
            <Caption>{text}</Caption>
            <Stage onClick={handleReady} $bgColor={bgColor}></Stage>
            {timeArray.length != 0 && !ready ? <Caption>{timeArray[timeArray.length - 1].time}ms</Caption> : ""}
            <LodingBox>
                <Loading $width={timeArray.length} />
            </LodingBox>
            <History>
                {timeArray.map((time) => (
                    <HistoryItem key={time.id}>{time.time}ms</HistoryItem>
                ))}
            </History>
            <Average time={average} />
            {isShow ? (
                <ResultBox>
                    <AverageBox>평균속도 : {average}ms</AverageBox>
                    <HistoryBox>
                        {timeArray.map((time) => (
                            <span key={time.id}>{time.time}ms</span>
                        ))}
                    </HistoryBox>
                    <RetryBox onClick={handleReset}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        </svg>
                    </RetryBox>
                </ResultBox>
            ) : (
                ""
            )}
        </>
    );
};

export default SpeedChecker;
