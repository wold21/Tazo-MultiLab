// import { useEffect, useState } from 'react';
// import { BlockLayer } from '../../component/blockLayer/blockLayer';
import { Wrapper, MainGameBox, LodingBox, Loading, History, HistoryItem, Stage, Caption } from './aimAbilityStyle';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Circle = styled.div<{ left: number; top: number }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    cursor: pointer;
    left: ${(props) => props.left}%;
    top: ${(props) => props.top}%;
`;

const StartButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
`;

const Timer = styled.div`
    margin-top: 20px;
    font-size: 24px;
`;

const ProgressBackground = styled.div<{ $bgColor: string; $width: number; $display: number }>`
    width: ${(props) => props.$width}%;
    height: 100%;
    background-color: ${(props) => props.$bgColor};
    border-radius: ${(props) => (props.$width === 100 ? '15px' : '0 15px 15px 0')};
    position: absolute;
    opacity: ${(props) => props.$display};
    transition: width 0.1s linear, border-radius 0.2s ease-in-out, opacity 0.5s ease-in-out;
    right: 0;
    top: 0;
`;

interface CircleProps {
    id: number;
    left: number;
    top: number;
}

const TotalSteps = 3;
export const AimAbility = () => {
    const [bgColor, setBgColor] = useState('#1C5D99');
    const [progressWidth, setProgressWidth] = useState(100);
    const [progressOpacity, setProgressOpacity] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    // const [timer, setTimer] = useState(10);
    // const [circles, setCircles] = useState<CircleProps[]>([]);
    // const [clickedCircles, setClickedCircles] = useState<number[]>([]);

    // useEffect(() => {
    //     let countdown: number;

    //     if (isGameActive && timer > 0) {
    //         countdown = setTimeout(() => {
    //             setTimer((prev) => prev - 1);
    //         }, 1000);
    //     }

    //     if (timer === 0) {
    //         setIsGameActive(false);
    //     }

    //     return () => clearTimeout(countdown);
    // }, [isGameActive, timer]);

    // const handleStart = () => {
    //     setTimer(10);
    //     setIsGameActive(true);
    //     setClickedCircles([]);
    //     generateCircles();
    // };

    // const generateCircles = () => {
    //     const newCircles = Array.from({ length: 8 }, (_, i) => ({
    //         id: i,
    //         left: Math.random() * 80,
    //         top: Math.random() * 80,
    //     }));
    //     setCircles(newCircles);
    // };

    // const handleCircleClick = (id: number) => {
    //     if (!clickedCircles.includes(id)) {
    //         setClickedCircles((prev) => [...prev, id]);
    //     }

    //     if (clickedCircles.length + 1 === circles.length) {
    //         setIsGameActive(false);
    //     }
    // };

    const handlePlay = () => {
        if (isPlaying) return;
        setIsPlaying(true);
        const duration = 10000;
        const intervalTime = 100;
        const interval = setInterval(() => {
            setProgressWidth((prevWidth) => {
                const newWidth = prevWidth - 100 / (duration / intervalTime);
                if (newWidth <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return newWidth;
            });
        }, intervalTime);
    };

    useEffect(() => {
        if (progressWidth < 5) {
            setProgressOpacity(0);
        }
    }, [progressWidth]);

    return (
        <Wrapper>
            <MainGameBox>
                <LodingBox>
                    <Loading $width={1} $totalSteps={TotalSteps} />
                </LodingBox>
                <History>
                    {/* {timeArray.map((time) => (
                        <HistoryItem key={time.id} $width={1} $totalSteps={5}>
                            {time.time}ms
                        </HistoryItem>
                    ))} */}
                    <HistoryItem key={1} $width={1} $totalSteps={TotalSteps}>
                        {'5/10'}
                    </HistoryItem>
                </History>

                <Stage onClick={handlePlay}>
                    <ProgressBackground $bgColor={bgColor} $width={progressWidth} $display={progressOpacity} />
                    {!isPlaying ? (
                        <Caption>클릭하면 시작합니다.</Caption>
                    ) : (
                        <>
                            <Circle
                                key={1}
                                left={10}
                                top={20}
                                // onClick={() => handleCircleClick(circle.id)}
                            />
                        </>
                    )}
                </Stage>
                {/* 
                    <Timer>Time Left: {timer}s</Timer>
                    {isGameActive &&
                        circles.map((circle) => (
                            <Circle
                                key={circle.id}
                                left={circle.left}
                                top={circle.top}
                                onClick={() => handleCircleClick(circle.id)}
                            />
                        ))}
                */}
            </MainGameBox>
        </Wrapper>
    );
};
